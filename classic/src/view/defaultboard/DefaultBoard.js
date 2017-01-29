/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Rackets.view.defaultboard.DefaultBoard', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-defaultboard',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Rackets.view.combostyles.ComboStyles',
        'Rackets.view.loaderstyles.LoaderStyles',

        'Rackets.view.defaultboard.DefaultBoardModel',
        'Rackets.view.defaultboard.DefaultBoardController'
    ],

    controller: 'defaultboard',
    viewModel: 'defaultboard',    

    ui: 'navlocater',

    tabRotation: 0,
    titleRotation: 0,
    tabBarHeaderPosition: 0,

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        xtype: 'combostyles'
    }, {
        xtype: 'loaderstyles'
    }]
});
