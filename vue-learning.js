// 全局注册组件
// Vue.component('btn-count', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: `<button v-on:click="count++">count:{{count}}</button>`,

// })

// const vm = new Vue({
//     el: "#app",
// })

Vue.component('title-posts', {
    props: ['post', 'title'],
    template: `<div>
    <h4>{{post}} </h4>
    <span>{{title}}</span>
    </div>
    `
})

new Vue({
    el: "#app",
    data: {
        posts: [
            'one',
            'two',
            'three'

        ],
        posts2: [{
                title: "第一章 风起"
            },
            {
                title: "第二章 云落"
            },
            {
                title: "第三章 雾霭"
            }
        ]
    }
})