'use strict';

const generateData = (strArrayCount) => {
    const strArray = [];

    const strLenMin = 3;
    const strLenMax = 30;
    const chars = [];
    for (let c=0; c<26; c++) {
        chars.push(String.fromCharCode(0x61 + c));
    }
    for (let c=0; c<10; c++) {
        chars.push(String.fromCharCode(0x30 + c));
    }
    const charsLen = chars.length;

    for(let i=0; i<strArrayCount; i++) {
        const strLen = Math.floor(Math.random() * (strLenMax - strLenMin)) + strLenMin;
        let generatedStr = "";
        for (let j=0; j<strLen; j++) {
            generatedStr += chars[Math.floor(Math.random() * charsLen)];
        }
        strArray.push({message: generatedStr});
    }

    return strArray;
}

let originalArray = generateData(10000);

const vm = new Vue({
    el: '#app',
    data: {
        items: originalArray,
        filterRegexp: ''
    },
    methods: {
        filter: function () {
            const regex = new RegExp(this.filterRegexp);
            this.items = originalArray.filter((item) => {
                return item.message.match(regex);
            });
        },
        revert: function () {
            this.filterRegexp = '';
            this.items = originalArray;
        }
    }
});
