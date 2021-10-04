Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{title}}</p>
            <button @click="isVisible = false" class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {{body}}
        </div>
    </article>
   `,
    // methods: {
    //     hideModal() {
    //         this.isVisible = false
    //     }
    // }
});

new Vue({
    el: '#root'
});