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
        },
        clickDiv1: function () {
            console.log('outer');
        },
        clickDiv2: function () {
            console.log('mid');
        },
        clickDiv3: function () {
            console.log('inner');
        },
        clickDiv3WithStop: function (event) {
            event.stopPropagation();
            console.log('inner');
        },
        clickReset: function () {
            console.log('reset');
        },
        clickResetWithStop: function (event) {
            event.stopPropagation();
            console.log('reset');
        },
        clickResetWithPreventDefault: function (event) {
            event.preventDefault();
            console.log('reset');
        },
        clickResetWithStopAndPreventDefault: function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log('reset');
        }
    }
});