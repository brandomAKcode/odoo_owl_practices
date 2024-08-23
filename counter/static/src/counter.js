/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { SubCounter } from "./sub_counter";

export class Counter extends Component {
    static template = "counter.counter";


    setup() {
        this.state = useState({ value: 0 });

    }

    increment() {
        this.state.value++;
    }

    static components = { SubCounter };
    test_out = "<h1></h1>";
}