import axios from 'axios';
import Accommodation from './Accommodation.js';

axios.defaults.baseURL = 'https://tourism.opendatahub.bz.it/api';

const TYPEFILTER = 1;
const PAGESIZE = 12;

export default {

    getAccommodations(page, stars, features, searchterm) {

      stars === 0 ? stars = null : null;
      features === 0 ? features = null : null;
      searchterm === '' ? searchterm = null: null;

      console.log(features);

      return axios.get(`/Accommodation?pagesize=${PAGESIZE}&typefilter=${TYPEFILTER}&pagenumber=${page}&categoryfilter=${stars}&featurefilter=${features}&searchfilter=${searchterm}`)
        .then(response => {
          var accommodations = [];
          response.data.Items.forEach(a => {
            accommodations.push(new Accommodation(a));
          });
          return { accommodations: accommodations, results: response.data.TotalResults }
        })
        .catch(error => {
          console.log(error);
        })
    },

    getAccommodation(id) {
      return axios.get(`/Accommodation/${id}`)
      .then(response => {
        return new Accommodation(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },

    getNumberOfAccommodations() {
        return axios.get(`/Accommodation?typefilter=${TYPEFILTER}&pagenumber=1&pagesize=1`)
          .then(response => response.data.TotalResults)
          .catch(error => {
            console.log(error);
          });
    }
}
