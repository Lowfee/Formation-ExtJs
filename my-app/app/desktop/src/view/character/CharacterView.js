Ext.define('MyExtGenApp.view.character.CharacterView', {
    extend: 'Ext.panel.Panel',
    xtype: 'charactergrid',
    controller: 'character',
    collapsed : true,
    tbar: [{
        xtype: 'label',
        html: 'Click the column header to sort by name'
    }, {
        text: 'Sort By 2nd Letter',
        handler: function(b) {
            b.up('charactergrid').down('grid').getStore().sortSecondLetter();
        }
    }, {
        xtype: 'spacer',
        width: 8
    }, {
        text: 'Sort By 3rd Letter',
        handler: function(b) {
            b.up('charactergrid').down('grid').getStore().sort('thirdLetter');
        }
    }],
    layout:'fit',
    items: [{
        xtype: 'grid',
        title: 'Characters',
        columns: [
            {
                text: 'Name',
                dataIndex: 'name',
                flex: 2
            },
            {
                text: 'Saga',
                dataIndex: 'saga',
                flex : 2
            },
            {
                text: 'Hp',
                dataIndex: 'hp',
                flex : 1
            },
            {
                text: 'Attack',
                dataIndex: 'attack',
                flex : 1
            },
        ],
        store: {
            type : 'character',
            autoLoad:true
        },
        listeners: {
            select: 'showCharacterDetails' 
        }
    }],
    
});