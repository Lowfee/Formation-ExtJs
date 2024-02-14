Ext.define('MyExtGenApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.task',

    model: 'MyExtGenApp.model.TaskModel',

    /*data : {"tasks" : [
        {
            "id":1,
            "title":"Tâche 1",
            "completed":true
        },
        {
            "id":2,
            "title":"Tâche 2",
            "completed":false
        },
        {
            "id":3,
            "title":"Tâche 3",
            "completed":true
        }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'tasks'
        }
    },*/

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/tasks',
        headers : {
            'Access-Control-Allow-Origin' :- "*"
        },
        reader: {
            type: 'json',
            rootProperty: 'tasks'
        }
    },
    autoLoad: true
});