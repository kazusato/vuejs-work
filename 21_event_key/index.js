'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        lastname: '',
        firstname: '',
        message: '',
        lastnameShift: '',
        firstnameShift: '',
        messageShift: ''
    },
    methods: {
        submit: function () {
            this.message = 'ようこそ、' + this.lastname + ' ' + this.firstname + '様';
        },
        submitShift: function () {
            this.messageShift = 'シフトの世界へようこそ、' + this.lastnameShift + ' ' + this.firstnameShift + '様';
        }
    }
});