Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{ task.description }}</task>
    </div>
    `,

    data() {
        return {
            tasks: [
                {description: 'Go to the store.', complete: false},
                {description: 'Go to the bank.', complete: false},
                {description: 'Go to the house.', complete: false},
                {description: 'Go to the movies.', complete: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});