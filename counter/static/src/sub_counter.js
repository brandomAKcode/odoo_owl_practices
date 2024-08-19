/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class SubCounter extends Component {
    static template = "counter.sub_counter";

    setup() {
        this.state = useState({ value: 0 });
    }

    increment() {
        this.state.value++;
    }
}