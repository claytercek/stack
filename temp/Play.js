gameObj.Play = function (game) {
  //170731 .. jwt Make local variables for all functions in this js file
  var txScore;      // Display text score
  var txTime;       // Display text time
  var timerObj;     // Timer Object
  var timerSeconds; // Current timer seconds
  var txDice;
	var sMummy;
	
	var pongObj;
	var soundsLoadedFlag;
};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');

    // Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    spBackground.anchor.setTo(0.5, 0.5);

    // Add walking mummy
    sMummy = this.add.sprite(300, 200, 'mummy');
		sMummy.anchor.x = .5;
		sMummy.anchor.y = .5;
    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = sMummy.animations.add('walk');
    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    sMummy.animations.play('walk', 30, true);

    // The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btWin = this.add.button(10, 500, 'winButton', this.winnerFun, this, 1, 0, 2);
    var btLose = this.add.button(110, 500, 'loseButton', this.loserFun, this, 1, 0, 2);

    //170731 .. jwt
    var btPoints = this.add.button(10, 400, 'pointsButton', this.pointsFun, this, 1, 0, 2);

    // Reset game score back to zero
    gameObj.gScore = 0;

    //170731 .. jwt reset score and count down timer
    var scoreStr = '0';
    var timeStr = '1:10';

    //170731 .. jwt DO NOT double declear variables
    txScore = this.add.text(25, 15, scoreStr);
    txTime = this.add.text(this.world.width - 115, 15, timeStr);

    txScore.fill = 'black';
    txScore.font = 'Zilla Slab';
    txScore.fontSize = 36;

    txTime.fill = 'black';
    txTime.font = 'Zilla Slab';
    txTime.fontSize = 36;

    //170731 .. jwt Setup Timer
    //170731 .. jwt COUNTDOWN
    timerSeconds = 70; // 1:10 = 70 seconds
    // Create our Timer Object
    timerObj = this.game.time.create(false);
    // Set a TimerEvent to occur every 1 second
    timerObj.loop(1000, this.updateTimerFun, this);
    // Start the timer running!
    timerObj.start();
		
		txDice = this.add.text(this.world.centerX - 50, 15, 'Dice: 0')
		txDice.fill = 'black';
		txDice.font = 'Zilla Slab';
		txDice.fontSize = 36;
		
		var btRoll = this.add.button(110,400, 'rollButton', this.rollFun, this, 1, 0,2)
		
		pongObj = this.add.audio('pong');
		//mp3 files take time to decode so check to make sure they are loaded
		soundsLoadedFlag = false;
		
		this.sound.setDecodedCallback([pongObj], function () {
			soundsLoadedFlag = true;
		}, this);
		
  },
	rollFun: function () {
		var diceNum = this.rnd.integerInRange(1,12);
		txDice.text = 'Dice: ' + diceNum;
		if (soundsLoadedFlag) {
			pongObj.play();
		}
		
	},
  winnerFun: function () {
    console.log('winnerFun called');
    this.state.start('Winner');
  },
  loserFun: function () {
    console.log('loserFun called');
    this.state.start('Loser');
  },
  pointsFun: function () {
    //170731 .. jwt
    console.log('pointsFun called ');
    //170731 .. jwt increase global score by 10
    gameObj.gScore += 10;
    //170731 .. jwt display global score
    txScore.text = gameObj.gScore;
  },
  updateTimerFun: function () {
    //170731 .. jwt
    timerSeconds--;
    if (timerSeconds >= 0) {
      //
      //170731 .. jwt convert seconds into min:secs
      displayMin = Math.floor(timerSeconds / 60) % 60;
      displaySec = Math.floor(timerSeconds) % 60;
      if (displaySec < 10) {
        //170731 .. jwt padd seconds with a 0 if less than 10
        displaySec = '0' + displaySec;
      }
      //170731 .. jwt update global time string
      gameObj.gTime = displayMin + ":" + displaySec;
      //170731 .. jwt display global time string
      txTime.text = gameObj.gTime;
    } else {
      this.loserFun();
    }
  },
	update: function () {
		// CORE GAME LOOP
		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			sMummy.x -= 5;
			sMummy.scale.x = -1;

		} else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			sMummy.x += 5;
			sMummy.scale.x = 1;
		}
	},
	render: function () {
		// Called after "update" apply post-render affects or extra debug overlays
		
	}
}; // prototype END


	
	
	
	
	
	
	
	
	
	
