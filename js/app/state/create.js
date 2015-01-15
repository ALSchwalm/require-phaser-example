define(["app/player"], function(player){
    return function(game){
        player.sprite = game.add.sprite(400, 500, 'ship');
    };
});
