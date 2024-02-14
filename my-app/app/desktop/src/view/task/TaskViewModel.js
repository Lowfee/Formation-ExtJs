Ext.define('MyExtGenApp.view.task.TaskViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.taskviewmodel',
    stores: {
        task : {
            type : 'task'
        }
    }

});
