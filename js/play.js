Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {

        var text = "- phaser -\n with a sprinkle of \n pixi dust.";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

        var t = game.add.text(game.world.centerX-300, 0, text, style);

        t.body.velocity.x = 50;

    },

    update: function() {

    }
    ,

};
