'use_strict';

Vue.component('message-box', {
    props: ['message'],
    template: '<div class="message-box">{{ message.text }}</div>'
});

const myMsgList = [
    { id: 0, text: 'Hello World!' },
    { id: 1, text: '日本語のメッセージです。' },
    { id: 2, text: '記号が入っても大丈夫。!"#$%&()' },
    { id: 3, text: '<span style="color: red">HTMLはどうなるでしょう？</span>' }
];

const vm = new Vue({
   el: '#app',
   data: {
       messageList: {}
   },
   methods: {
       showMessage: function () {
           this.messageList = myMsgList;
       }
   }
});
