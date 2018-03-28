'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    computed: {
        reversed: function () {
            return this.message.split('').reverse().join('');
        }
    }
});
