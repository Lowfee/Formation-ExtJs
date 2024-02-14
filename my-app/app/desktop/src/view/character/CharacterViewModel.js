Ext.define('MyExtGenApp.view.character.CharacterViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.characterviewmodel',
    stores: {
        character : {
            type : 'character'
        }
    }

});
