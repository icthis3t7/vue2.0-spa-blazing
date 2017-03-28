import Vue from 'vue';

export default {
    getUsers(succes, error) {
        Vue.http.get('user').then(
            (response) => {
                succes(response.data)
            },
            (response) => {
                error(response)
            })
    }

};
