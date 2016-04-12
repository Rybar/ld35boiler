Game.Play = function (game) { };

Game.Play.prototype = {
    t: {},
    create: function () {

        var text = "- phaser -\n with a sprinkle of \n pixi dust.";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

        t = game.add.text(game.world.centerX-300, 0, text, style);

        //t.body.velocity.x = 50;

    },

    update: function() {
        t.x += 3;
        if(t.x > 600) t.x = -600;
    }
    ,

};
