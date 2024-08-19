# -*- coding: utf-8 -*-

{
    'name': "Counter",

    'summary': """
        Counter / Starting module for "Discover the Owl components"
    """,

    'description': """
        Counter / Starting module for "Discover the Owl components"
    """,

    'author': "Brandom Bermudez",
    'category': 'Practice/counter',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],
    'application': True,
    'installable': True,
    'data': [
        'views/templates.xml',
    ],
    'assets': {
        'counter.assets_counter': [
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap_backend'),

            # required for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',

            # include base files from framework
            ('include', 'web._assets_core'),

            'web/static/src/core/utils/functions.js',
            'web/static/src/core/browser/browser.js',
            'web/static/src/core/registry.js',
            'web/static/src/core/assets.js',
            'counter/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
