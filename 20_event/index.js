'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        warn: function (message, event) {
            if (event) {
                event.preventDefault();
            }
            this.message = message + event;
        }
    }
});