import axios from 'axios';

const AuthentificationService = {

    login: function(authData) {
        return axios.post(`http://localhost:8088/auth/login`, authData, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })

    }


}
export default AuthentificationService;