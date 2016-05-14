Game.Play = function (game) { };

Game.Play.prototype = {
      
    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#2d2d2d';


        var dudeData = [
            '.......3.....',
            '......333....',
            '....5343335..',
            '...332333333.',
            '..33333333333',
            '..37773337773',
            '..38587778583',
            '..38588888583',
            '..37888888873',
            '...333333333.',
            '.F....5556...',
            '3E34.6757.6..',
            '.E.55.666.5..',
            '......777.5..',
            '.....6..7....',
            '.....7..7....'
        ];

        game.create.texture('phaserDude', dudeData, 4, 4, 0);

        player = game.add.sprite(300, 300, 'phaserDude');
        player.anchor.set(0.5);

        game.physics.arcade.enable(player);

        cursors = game.input.keyboard.createCursorKeys();
        
        tileTexture = game.add.bitmapData(64, 32);
        
        tileTexture.context.fillStyle = "rgb(0,0,0,0)";
                        tileTexture.context.fillRect(0,0,32,32);
                        tileTexture.context.fillStyle = "white";
                        tileTexture.context.fillRect(32,0,32,32);
        tileTexture.generateTexture('tileimage');
        
        map = game.add.tilemap();
        map.create('level0', 16,16,32,32);
        //map.create('map1', 16, 16, 32, 32);
        back = map.createBlankLayer("back",16,16,32,32);
        
        map.addTilesetImage('tileimage');

    },

    update: function() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
            player.scale.x = 1;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
            player.scale.x = -1;
        }

        if (cursors.up.isDown)
        {
            player.body.velocity.y = -200;
        }
        else if (cursors.down.isDown)
        {
            player.body.velocity.y = 200;
        }

        if (player.y >400){
            game.state.start('Over');
        }

    }

};
