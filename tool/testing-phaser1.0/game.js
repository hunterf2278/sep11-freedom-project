const config = {
    type: Phaser.AUTO,

    width:800,
    height:600,
    backgroundColor:"blue",

    scene: {
        create: function () {
            this.add.text(300,250,"Hello World!"),{
                fontSize:"32px",
                color:"red",
              });

        }
    }
};

const game = new Phaser.Game(config);

