define(["app/player"], function(player){
    return function(game){
        // Move the player up the screen
        player.sprite.y -= 1;
    };
});
