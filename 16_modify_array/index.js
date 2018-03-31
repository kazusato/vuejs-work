'use strict';

const generateOriginalArray = () => {
    return [
        {message: 'hello world'},
        {message: 'こんにちは、世界'},
        {message: 'Welcome to JS world!'},
        {message: 'JSの世界へようこそ!'}
    ]
};

const vm = new Vue({
    el: '#app',
    data: {
        items: generateOriginalArray(),
        modStrDirect: '',
        modStrVue: ''
    },
    methods: {
        modifyDirect: function () {
            this.items[0] = {message: this.modStrDirect};
        },
        revertDirect: function () {
            this.modStrDicret = '';
            this.items = generateOriginalArray();
        },
        modifyVue: function () {
            Vue.set(this.items, 0, {message: this.modStrVue});
        },
        revertVue: function () {
            this.modStrVue = '';
            this.items = generateOriginalArray();
        }
    }
});
