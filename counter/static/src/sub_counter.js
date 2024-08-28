/** @odoo-module **/

import { Component, useState, useRef, onMounted } from "@odoo/owl";

export class SubCounter extends Component {
    static template = "counter.sub_counter";
    
    static props = {
        description: {type: String},
        onAddTodo: {type: Function},
        onIncrement: {type: Function},
        onToggleState: {type: Function},
        onDeleteTodo: {type: Function},
        todoList: {
            type: Array,
            element: {type: Object, shape: {id: Number, description: String, isCompleted: Boolean}}
        }
    }

    setup() {
        this.state = useState({ value: 0, newTodo: '' });

        this.inputRef = useRef("input-focus");
        onMounted(() => {
            this.inputRef.el.focus();
        });
    }

    increment() {
        this.state.value++;
    }
}