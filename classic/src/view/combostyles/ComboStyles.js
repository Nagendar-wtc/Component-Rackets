Ext.define('Rackets.view.combostyles.ComboStyles', {
    extend: 'Ext.container.Container',

    xtype: 'combostyles',

    title: 'Combo Style',

    iconCls: 'x-fa fa-cube',

    initComponent: function() {
        var comboStylesStore = Ext.getStore('combostyles.ComboStyles');

        if(!comboStylesStore.isLoaded()) {
            comboStylesStore.load();            
        }

        this.callParent(arguments);
    },

    margin: 10,

    items: [{
        xtype: 'combo',
        width: 240,
        ui: 'commontextfield',
        emptyText: 'Overflow Combo Style',
        store: 'combostyles.ComboStyles',
        displayField: 'name',
        valueField: 'value',
        listConfig: {
            cls: 'hover-combo-drop-cls'
        }
    }, {
        xtype: 'combo',
        width: 240,
        ui: 'commontextfield',
        emptyText: 'Split Combo Style',
        store: 'combostyles.ComboStyles',
        displayField: 'name',
        valueField: 'value',
        listConfig: {
            cls: 'split-combo-drop-cls'
        }
    }]
});
