import Axios from 'axios';

// const defaultOptions = {
//     baseURL: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/10',
//     headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "77623551f9mshaa50d2d994858ddp15fc4bjsn245566d226d4"
//     },
//     query : { "timezone": "Europe%2FLondon" }
// };

// const Api = Axios.create(defaultOptions);

const Api = Axios.create({ baseURL : 'https://rocketseat-node.herokuapp.com/api/' });

export default Api;