/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Rackets.view.defaultboard.DefaultBoard', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-defaultboard',

    requires: [
        'Ext.MessageBox',

        'Rackets.view.defaultboard.DefaultBoardModel',
        'Rackets.view.defaultboard.DefaultBoardController'
    ],

    controller: 'defaultboard',
    viewModel: 'defaultboard',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                html: 'On the way!'
            }]
        }
    ]
});
