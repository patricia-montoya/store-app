import axios from 'axios'
const API_KEY = 'AIzaSyCskoUfrjQih1sviqJfL9MxBRXQrlsEM2s';

export const signupNewUser = (authData) => {
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`, authData)
};

export const signinUser = (authData) => {
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`, authData)
};
