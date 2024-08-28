/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { SubCounter } from "./sub_counter";

export class Counter extends Component {
    static template = "counter.counter";

    setup() {
        this.state = useState({ value: 0 });
        this.addTodo = this.addTodo.bind(this);
        this.increment = this.increment.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.todo = useState({list: [
            { id: 1, description: "buy sugar", isCompleted: false },
            { id: 2, description: "buy bread", isCompleted: true },
            { id: 3, description: "buy milk", isCompleted: false }
        ]});
        console.log('Show list');
        console.log(this.state.value)
        console.log(this.todo.list);
    }

    increment() {
        this.state.value++;
    }

    toggleState (id_todo) {
        const index = this.todo.list.findIndex(x => x.id === id_todo);
        this.todo.list[index].isCompleted = !this.todo.list[index].isCompleted;
    }

    deleteTodo(id_todo) {
        const index = this.todo.list.findIndex(x => x.id === id_todo);
        this.todo.list.splice(index, 1);
    }

    addTodo(todo) {
        console.log(this.todo.list.length);
        this.todo.list.push(
            { id: this.todo.list.length + 1, description: todo, isCompleted: false }
        )
    }

    static components = { SubCounter };
    test_out = "<h1></h1>";
}