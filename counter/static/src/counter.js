/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { SubCounter } from "./sub_counter";

export class Counter extends Component {
    static template = "counter.counter";

    setup() {
        this.state = useState({ value: 0 });
        this.childCAllback = this.childCAllback.bind(this);
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

    childCAllback() {
        this.state.value++;
        alert('Child active this function :)');
    }

    static components = { SubCounter };
    test_out = "<h1></h1>";
}