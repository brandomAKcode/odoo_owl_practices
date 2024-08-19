# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class Counter(http.Controller):
    @http.route(['/counter'], type='http', auth='public')
    def show_counter(self):
        """
        Renders the owl playground page
        """
        return request.render('counter.counter')
