import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '1faff5e2a3msh86d660a061bf811p16c28djsn9c9189b30e23',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const getPlacesData = async () => {
    try {
        // request data
        
        const { data : { data } } = await axios.get(URL, options);
    } catch (error) {
        console.log(error);
    }
}