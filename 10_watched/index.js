'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        lastName: '',
        firstName: '',
        fullName: '',
        prefName: '',
        cityName: '',
        phoneNumber: ''
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
        },
        phoneItem1: {
            set: function (newValue) {
                return newValue + '-' + this.phoneItem2 + '-' + this.phoneItem3;
            },
            get: function() {
                const values = this.phoneNumber.split('-');
                if (values.length == 1) {
                    return values[0];
                } else if (values.length == 2) {
                    return values[0];
                } else if (values.length == 3) {
                    return values[0];
                } else {
                    return '';
                }
            }
        },
        phoneItem2: {
            set: function (newValue) {
                return this.phoneItem1 + '-' + newValue + '-' + this.phoneItem3;
            },
            get: function() {
                const values = this.phoneNumber.split('-');
                if (values.length == 1) {
                    return '';
                } else if (values.length == 2) {
                    return values[1];
                } else if (values.length == 3) {
                    return values[1];
                } else {
                    return '';
                }
            }
        },
        phoneItem3: {
            set: function (newValue) {
                return this.phoneItem1 + '-' + this.phoneItem2 + '-' + newValue;

            },
            get: function() {
                const values = this.phoneNumber.split('-');
                if (values.length == 1) {
                    return '';
                } else if (values.length == 2) {
                    return '';
                } else if (values.length == 3) {
                    return values[2];
                } else {
                    return '';
                }
            }
        }
    }
});