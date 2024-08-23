/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class SubCounter extends Component {
    static template = "counter.sub_counter";
    
    static props = {
        description: {type: String},
        callback: {type: Function},
        todoList: {
            type: Array,
            element: {type: Object, shape: {id: Number, description: String, isCompleted: Boolean}}
        }
    }

    setup() {
        this.state = useState({ value: 0 });
        console.log(this.props.todoItem);
    }

    increment() {
        this.state.value++;
    }
}