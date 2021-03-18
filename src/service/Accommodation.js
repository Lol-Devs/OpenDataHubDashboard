export const BITMASK_STARS = {
    '0': 0,
    '1': 52370,
    '2': 52368,
    '3': 52352,
    '3s': 52224,
    '4': 51200,
    '4s': 49152,
    '5': 32768,
}


export const BITMASK_FEATURES = {
    'none': null,
    'group_friendly': 1,
    'meeting_rooms': 2,
    'swimming_pool': 4,
    'sauna': 8,
    'garage': 16,
    'pick_up': 32,
    'wlan': 64,
    'barrier_free': 128,
    'allergy_menus': 256,
    'pets': 512
}


export default class Accommodation {

    constructor(data) {

        this.id = data.Id;
        this.name = data.Shortname;
        this.longdesc = data.AccoDetail.de.Longdesc,
        this.shortdesc = data.AccoDetail.de.Shortdesc,
        this.beds = data.Beds;
        this.altitude = data.Altitude;
        this.bookable = data.IsBookable;
        this.features = data.SpecialFeaturesIds;

        this.stars = {
            number: 0,
            s: false
        };

        switch(data.AccoCategoryId) {
            case '1star': {
                this.stars.number = 1;
                break;
            }
            case '2stars': {
                this.stars.number = 2;
                break;
            }
            case '3stars': {
                this.stars.number = 3;
                break;
            }
            case '3sstars': {
                this.stars.number = 3;
                this.stars.s = true;
                break;
            }
            case '4stars': {
                this.stars.number = 4;
                break;
            }
            case '4sstars': {
                this.stars.number = 4;
                this.stars.s = true;
                break;
            }
            case '5stars': {
                this.stars.number = 5;
                break;
            }
        }

        this.contact = {
            street: data.AccoDetail.de.Street,
            city: data.AccoDetail.de.City,
            zip: data.AccoDetail.de.Zip,
            website: data.AccoDetail.de.Website,
            phone: data.AccoDetail.de.Phone,
            fax: data.AccoDetail.de.Fax,
            email: data.AccoDetail.de.Email,
            vat: data.AccoDetail.de.Vat,
        }

        this.location = {
            city: data.LocationInfo.MunicipalityInfo.Name.de,
            region: data.LocationInfo.RegionInfo.Name.de,
            latitude: data.Latitude,
            longitude: data.Longitude,
        };

        this.image = null;

        if (data.ImageGallery.length > 0) {
            this.image = data.ImageGallery[0].ImageUrl;
        }

    }

}   