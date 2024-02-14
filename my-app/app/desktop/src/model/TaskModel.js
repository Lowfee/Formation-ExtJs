Ext.define('MyExtGenApp.model.TaskModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'title',   type: 'string'},
        {name: 'completed', type: 'boolean'}
    ]
});