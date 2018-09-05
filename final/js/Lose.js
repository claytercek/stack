gameObj.Lose = function(game) {};

gameObj.Lose.prototype = {
	create: function() {
		this.stage.backgroundColor = 0xffffff;

		loseMusic = this.add.audio("lose");

		loseMusic.play();

		// Backgrounds
		let backgrounds = this.add.group();

		var loseR = this.add.sprite(78, 529, "loseR");
		var loseB = this.add.sprite(567, 435, "loseB");

		let red_BG = this.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 10, 465, 700);
		red_BG.endFill();
		backgrounds.add(red_BG);

		let blue_BG = this.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 10, 465, 700);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds

		var spaceBG = this.add.sprite(190, 162, "space");

		var gameText = this.add.text(50, 15, "GAME", {
			fill: "#FFFFFF",
			font: "900 130px Raleway"
		});
		var overText = this.add.text(545, 15, "OVER", {
			fill: "#FFFFFF",
			font: "900 130px Raleway"
		});

		var pressSpace_1 = this.add.text(135, 168, "press", {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "300 20px Raleway"
		});
		var pressSpace_2 = this.add.text(205, 168, "space", {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "600 20px Raleway"
		});
		var pressSpace_3 = this.add.text(283, 168, "to restart", {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "300 20px Raleway"
		});

		var timerSeconds = gameObj.timeLeft >= 0 ? Math.floor(gameObj.timeLeft) : 0;
		var displayMin = Math.floor(timerSeconds / 60);
		if (displayMin < 10) {
			displayMin = "0" + displayMin;
		}
		var displaySec = timerSeconds % 60;
		if (displaySec < 10) {
			displaySec = "0" + displaySec;
		}
		timeText = displayMin + ":" + displaySec;

		var finalTime = this.add.text(615, 168, "Time Remaining: " + timeText, {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "300 20px Raleway"
		});

		var maxY = 450;
		var scaleFactor = 30;

		var maxHeight = gameObj.blueTower.height > gameObj.redTower.height ? gameObj.blueTower.height : gameObj.redTower.height;

		if (maxHeight * scaleFactor > maxY) {
			scaleFactor = maxY / maxHeight;
		}

		for (block of gameObj.blueTower.dimensions) {
			this.makeBlock(800 + block.x * 3.88 * scaleFactor, 690 - block.y * scaleFactor, block.w * 3.88 * scaleFactor, scaleFactor);
			var blueMaxY = 720 - block.y * scaleFactor;
		}

		for (block of gameObj.redTower.dimensions) {
			this.makeBlock(320 + block.x * 3.88 * scaleFactor, 690 - block.y * scaleFactor, block.w * 3.88 * scaleFactor, scaleFactor);
			var redMaxY = 720 - block.y * scaleFactor;
		}

		this.makeBlock(215, redMaxY - 30, 88, 3);
		this.makeBlock(695, blueMaxY - 30, 88, 3);
		var heightRed = this.add.text(108, redMaxY - 50, "Height: " + gameObj.redTower.height, {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "600 20px Raleway"
		});
		var heightBlue = this.add.text(584, blueMaxY - 50, "Height: " + gameObj.blueTower.height, {
			fill: "#FFFFFF",
			wordWrap: true,
			wordWrapWidth: 440,
			font: "600 20px Raleway"
		});

		keySpace = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		keySpace.onDown.add(this.start, this);
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
	start: function() {
		loseMusic.stop();
		this.state.start("Game");
	}
};
