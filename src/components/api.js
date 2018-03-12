import axios from 'axios';

// Optionally the request above could also be done as
function enter(user, pass){

    return axios.get('/goapi/login', {
        params: {
            user: user,
            pass: pass
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}

export default Actions;