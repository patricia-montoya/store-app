import axios from 'axios'
const API_KEY = 'AIzaSyCskoUfrjQih1sviqJfL9MxBRXQrlsEM2s';

export const signupNewUser = (authData) => {
    console.log(authData)
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`, authData)

};
