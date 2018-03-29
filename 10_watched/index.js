'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        lastName: '',
        firstName: '',
        fullName: ''
    },
    watch: {
        lastName: function (val) {
            this.fullName = val + ' ' + this.firstName;
        },
        firstName: function (val) {
            this.fullName = this.lastName + ' ' + val;
        }
    }
});