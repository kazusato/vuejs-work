'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        lastName: '',
        firstName: '',
        fullName: '',
        prefName: '',
        cityName: ''
    },
    watch: {
        lastName: function (val) {
            this.fullName = val + ' ' + this.firstName;
        },
        firstName: function (val) {
            this.fullName = this.lastName + ' ' + val;
        }
    },
    computed: {
        address: function () {
            return this.prefName + this.cityName;
        }
    }
});