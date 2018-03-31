'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        items: [
            {key: 'name', value: 'SORANO', public: true},
            {key: 'origin', value: 'Japan', public: true},
            {key: 'height', value: '170cm', public: false},
            {key: 'weight', value: '65kg', public: false},
        ]
    }
});