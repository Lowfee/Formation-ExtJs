Ext.define('MyExtGenApp.view.character.CharacterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.character',

    showCharacterDetails: function (view, record, index) {
        const datas = record[0].getData();
        const name = datas.name;
        const saga = datas.saga;
        const hp = datas.hp;
        const attack = datas.attack;

        Ext.Msg.alert('Détails du personnage', `<h3> Nom : ${name} <br> Saga : ${saga} <br> HP : ${hp} <br> Attaque : ${attack}</h3>`);
    }
});
