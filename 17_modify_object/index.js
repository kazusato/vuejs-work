'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        flight: {
            flightNumber: 'ZZ999',
            departureDate: '10APR18',
            arrivalDate: '10APR18',
            departureTime: '1700',
            arrivalTime: '0830',
            departureAirport: 'HND',
            arrivalAirport: 'SFO'
        },
        propKey: '',
        propValue: ''
    },
    methods: {
        addProp: function () {
            this.flight.updateDateTime = new Date().toLocaleString();
            Vue.set(this.flight, this.propKey, this.propValue);
            this.propKey = '';
            this.propValue = '';
        },
        replaceObjectDirect: function () {
            Object.assign(this.flight, {
                flightNumber: 'ZZ1',
                departureDate: '20APR18',
                arrivalDate: '20APR18',
                departureTime: '1000',
                arrivalTime: '1500',
                departureAirport: 'HND',
                arrivalAirport: 'SIN'
            });
        },
        replaceObjectVue: function () {
            this.flight = Object.assign({}, this.flight, {
                flightNumber: 'ZZ56',
                departureDate: '30APR18',
                arrivalDate: '30APR18',
                departureTime: '1500',
                arrivalTime: '1645',
                departureAirport: 'GMP',
                arrivalAirport: 'HND'
            });
        }
    }
});