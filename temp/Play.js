gameObj.Play = function (game) {};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    spBackground.anchor.setTo(0.5, 0.5);

    // Add walking mummy
    var sMummy = this.add.sprite(300, 200, 'mummy');
    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = sMummy.animations.add('walk');
    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    sMummy.animations.play('walk', 30, true);

    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
    var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);


    var scoreStr = '12000';
    var timeStr = '2:30';

    var txScore = this.add.text(25, 15, scoreStr);
    var txTime = this.add.text(this.world.width - 115, 15, timeStr);

    txScore.fill = 'black';
    txScore.font = 'Zilla Slab';
    txScore.fontSize = 36;

    txTime.fill = 'black';
    txTime.font = 'Zilla Slab';
    txTime.fontSize = 36;
  },
  winnerFun: function () {
    console.log('winnerFun called');
  },
  loserFun: function () {
    console.log('loserFun called');
  }
};
