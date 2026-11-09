const config = {
    type: Phaser.AUTO,

    width:400,
    height:300,
    backgroundColor:"#0000ff",

    scene: {
        create: function () {
            this.cameras.main.setBackgroundColor("#0000ff");
            this.add.text(100,100,"Hello World!",{
                fontSize:"32px",
                color: "red",
              });

        }
    }
};

const game = new Phaser.Game(config);

