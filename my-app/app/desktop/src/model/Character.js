Ext.define('MyExtGenApp.model.Character', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string'},
        {name: 'saga',   type: 'string'},
        {name: 'hp', type: 'int', defaultValue: 10},
        {name: 'attack', type: 'int', defaultValue: 10},
        {name: 'thirdLetter', 
        calculate: function(data) {
            if (!data.name) return; 
                return data.name.charAt(2);
        }}
    ]
});