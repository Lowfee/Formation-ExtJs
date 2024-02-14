Ext.define('MyExtGenApp.store.Character', {
    extend: 'Ext.data.Store',
    alias: 'store.character',

    model: 'MyExtGenApp.model.Character',
    data : {items:[
        {name:'Steve', saga:'Minecraft', hp: 10, attack:20},
        {name:'Commando', saga:'Risk Of Rain', hp: 50, attack:10},
        {name:'Steve', saga:'Minecraft', hp: 10, attack:20},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    secondLetterSorter: Ext.create('Ext.util.Sorter', {
        sorterFn: function(r1, r2) {
            var c1 = r1.get('name').charCodeAt(1);
            var c2 = r2.get('name').charCodeAt(1);
            return Ext.Number.constrain((c1 - c2), -1, 1);
        }
    }),
    sortSecondLetter: function() {
        this.sort(this.secondLetterSorter);
    }

});