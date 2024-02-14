Ext.define('MyExtGenApp.view.task.TaskView', {
    extend: 'Ext.grid.Grid',
    xtype: 'taskview',
    controller: 'taskcontroller',
    store: {
        type : 'task',
        autoLoad:true
    },
    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'Title',
            dataIndex: 'title',
            flex : 10
        },
        {
            text: 'Completed',
            xtype: 'checkcolumn',
            dataIndex: 'completed',
            flex : 1
        }   
    ]
});