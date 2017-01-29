Ext.define('Rackets.store.combostyles.ComboStyles', {
	extend: 'Ext.data.Store',

	alias: 'store.combostyles',

	requires: [
		'Rackets.model.combostyles.ComboStyles'
	],

	model: 'Rackets.model.combostyles.ComboStyles',

	proxy: {
		type: 'ajax',

		api: {
			read: Api.combostyles
		},

		actionMethods: {
			read: 'GET'
		},

		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});