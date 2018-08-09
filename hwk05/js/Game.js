gameObj.Game = function(game) {
	var redScore;
	var blueScore;
	var timerObj;
	var timerSeconds;
	var timerBar;
};

gameObj.Game.prototype = {
	create: function() {
		this.stage.backgroundColor = 0xffffff;

		// Backgrounds
		let backgrounds = this.add.group();

		let red_BG = this.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 40, 465, 670);
		red_BG.endFill();
		backgrounds.add(red_BG);


		gameObj.redScore = 0;
		gameObj.blueScore = 0;

		timerBar = this.add.sprite(10,10,"timer_bar")

		//COUNTDOWN
		timerSeconds = 80;
    gameObj.timeLeft = timerSeconds;
		timerObj = this.game.time.create(false);
		timerObj.loop(Phaser.Timer.SECOND/60, this.updateTimer, this);
		timerObj.start();


		let blue_BG = this.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 40, 465, 670);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds

		let red_blocks = this.add.group();
		this.makeBlock(95, 644, 289, 72, 0.4, red_blocks);
		this.makeBlock(95, 572, 233, 72, 0.6, red_blocks);
		this.makeBlock(95, 500, 147, 72, 0.8, red_blocks);
		this.makeBlock(132, 429, 110, 72, 1, red_blocks);
		this.makeBlock(59, 334, 110, 72, 1, red_blocks);

		let blue_blocks = this.add.group();
		this.makeBlock(573, 643, 292, 72, 0.2, blue_blocks);
		this.makeBlock(573, 571, 268, 72, 0.4, blue_blocks);
		this.makeBlock(588, 499, 253, 72, 0.6, blue_blocks);
		this.makeBlock(595, 427, 246, 72, 0.8, blue_blocks);
		this.makeBlock(595, 355, 238, 72, 1, blue_blocks);
		this.makeBlock(684, 263, 238, 72, 1, blue_blocks);

		redScore = this.add.text(180, 55, "Height: 0", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});
		blueScore = this.add.text(655, 55, "Height: 0", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});

		var dBG = this.add.sprite(826, 193, "aBG");
		var pressD_2 = this.add.text(837, 200, "D", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressD_3 = this.add.text(867, 200, "to lose", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		var aBG = this.add.sprite(826, 143, "aBG");
		var pressA_2 = this.add.text(837, 150, "A", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressA_3 = this.add.text(867, 150, "to win", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		keyA = this.input.keyboard.addKey(Phaser.Keyboard.A);
		keyA.onDown.add(this.win, this);

		keyD = this.input.keyboard.addKey(Phaser.Keyboard.D);
		keyD.onDown.add(this.lose, this);


		var qBG = this.add.sprite(26, 193, "aBG");
		var pressQ_2 = this.add.text(37, 200, "Q", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressQ_3 = this.add.text(67, 200, "to add points to Red", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		var eBG = this.add.sprite(26, 143, "aBG");
		var pressE_2 = this.add.text(37, 150, "E", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressE_3 = this.add.text(67, 150, "to add points to Blue", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		keyA = this.input.keyboard.addKey(Phaser.Keyboard.Q);
		keyA.onDown.add(this.addPointRed, this);

		keyD = this.input.keyboard.addKey(Phaser.Keyboard.E);
		keyD.onDown.add(this.addPointBlue, this);

	},
	makeBlock: function(x1, y1, w, h, opacity, group) {
		let o = opacity ? opacity : 1;
		let block = this.add.graphics(); // adds to the world stage
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, o);
		block.drawRect(x1, y1, w, h);
		block.endFill();
		group ? group.add(block) : "";
	},
	win: function() {
		this.state.start("Win");
	},
	lose: function() {
		this.state.start("Lose");
	},
	addPointRed: function() {
		gameObj.redScore += 10;
		redScore.text = "Height: " + gameObj.redScore;
	},
	addPointBlue: function() {
		gameObj.blueScore += 10;
		blueScore.text = "Height: " + gameObj.blueScore;
	},
	updateTimer: function() {
		gameObj.timeLeft -= 1/60;
		if (gameObj.timeLeft <= 0 ) {
			if (gameObj.redScore >= 100 && gameObj.blueScore >= 100) {
				this.state.start("Win")
			} else {
				this.state.start("Lose")
			}
		}
		timerBar.scale.x = ( gameObj.timeLeft ) / timerSeconds;
	}
};
