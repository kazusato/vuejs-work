'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        radioStatus: 'yes',
        loginType: 'username',
        toggleText: 'メールアドレスでログイン',
        loginType2: 'username',
        toggleText2: 'メールアドレスでログイン'
    },
    methods: {
        toggleLoginType: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email';
                this.toggleText = 'ユーザー名でログイン';
            } else {
                this.loginType = 'username';
                this.toggleText = 'メールアドレスでログイン'
            }
        },
        toggleLoginType2: function () {
            if (this.loginType2 === 'username') {
                this.loginType2 = 'email';
                this.toggleText2 = 'ユーザー名でログイン';
            } else {
                this.loginType2 = 'username';
                this.toggleText2 = 'メールアドレスでログイン'
            }
        }
    }
});
