Game.Play = function (game) { };

Game.Play.prototype = {
      
    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.world.setBounds(0,0,2000,2000);

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

        game.create.texture('phaserDude', dudeData, 3, 3, 0);

        player = game.add.sprite(24, 24, 'phaserDude');
        player.anchor.set(0.5);
        
        game.camera.follow(player);

        game.physics.arcade.enable(player);

        cursors = game.input.keyboard.createCursorKeys();
        
        tileTexture = game.make.bitmapData(128, 64);
        tileTexture.rect(0,0,64,64,"rgba(0,0,0,0");
        tileTexture.rect(64,0,64,64,"rgba(200,200,200,1)");
        
        //sprite = game.add.sprite(10,10, tileTexture); //draw to the screen
        tileTexture.generateTexture('tileimage');
        // tileTexture.context.fillStyle = "rgb(0,0,0,0)";
        //                 tileTexture.context.fillRect(0,0,32,32);
        //                 tileTexture.context.fillStyle = "white";
        //                 tileTexture.context.fillRect(32,0,32,32);
        // tileTexture.generateTexture('tileimage');
        
        map = game.add.tilemap();
        map.create('level0', 16,16,64,64);
        //map.create('map1', 16, 16, 32, 32);
        back = map.createBlankLayer("back",32,32,64,64);
        
        map.addTilesetImage('tileimage');
        
        map.fill(1,0,0,1,1,"back");
        map.random(0,0,32,32,"back");
        map.fill(0,0,0,3,3,"back");
        map.setCollision(1,true,'back');
        
        

    },

    update: function() {
        
        game.physics.arcade.collide(player, back);
        
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

        // if (player.y >400){
        //     game.state.start('Over');
        // }

    }

};
