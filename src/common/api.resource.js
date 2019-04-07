import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export const authResource = Vue.resource('v1/auth', {}, {
    createToken: { method:  'POST', url: 'v1/auth/token'},
    getCurrentUser: {method: 'GET', url: 'v1/auth/current-user'}
});