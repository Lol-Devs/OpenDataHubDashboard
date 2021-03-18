import axios from 'axios';
import Accommodation from './Accomodation.js';

axios.defaults.baseURL = 'https://tourism.opendatahub.bz.it/api';

export default {

    getAccommodations(page, stars, features) {

        stars === 0 ? stars = null : null;
        features === 0 ? features = null : null;

        return axios.get(`/Accommodation?typefilter=1&pagenumber=${page}&categoryfilter=${stars}&featurefilter=${features}`)
        .then(response => {
            console.log(response.data.Items);
            var accommodations = [];
            response.data.Items.forEach(a => {
                accommodations.push(new Accommodation(a));
            });
            console.log(accommodations);
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
    }
}
