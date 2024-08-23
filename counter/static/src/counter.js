/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { SubCounter } from "./sub_counter";

export class Counter extends Component {
    static template = "counter.counter";


    setup() {
        this.state = useState({ value: 0 });
        this.childCAllback = this.childCAllback.bind(this);
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