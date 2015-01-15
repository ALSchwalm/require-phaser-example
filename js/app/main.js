requirejs(['Phaser',
           'app/state/preload',
           'app/state/update',
           'app/state/create'],
function(Phaser, preload, update, create){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-body', {
        preload : preload,
        update  : update,
        create  : create
    });
});
