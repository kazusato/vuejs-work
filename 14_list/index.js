'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        commonMessage: 'メッセージ',
        items: [
            {message: "hello world"},
            {message: "こんにちは、世界"}
        ],
        flight: {
            flightNumber: 'ZZ999',
            departureDate: '10APR18',
            arrivalDate: '10APR18',
            departureTime: '1700',
            arrivalTime: '0830',
            departureAirport: 'HND',
            arrivalAirport: 'SFO'
        },
        newMessage: ''
    },
    methods: {
        addMessage: function () {
            if (this.newMessage.trim().length != 0) {
                this.items.push({message: this.newMessage});
            }
        }
    }
});