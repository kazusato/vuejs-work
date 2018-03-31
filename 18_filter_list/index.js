'use strict';

const list = [
    {message: 'Hello World'},
    {message: 'Hello Japan'},
    {message: 'Welcome to the JS World'},
    {message: 'Welcome Japan'}
];

const vm = new Vue({
    el: '#app',
    data: {
        filterRegexp: ''
    },
    computed: {
        filteredItems: function () {
            const regex = new RegExp(this.filterRegexp);
            return list.filter((item) => {
                return item.message.match(regex);
            });
        }
    },
    methods: {
        revert: function () {
            this.filterRegexp = '';
        }
    }
});