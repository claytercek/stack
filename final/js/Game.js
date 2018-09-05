gameObj.Game = function(game) {
	var timerObj;
	var timerSeconds;
	var timerBar;
	var hoverRed;
	var hoverBlue;
	var isAccelerated = false;
};

gameObj.Game.prototype = {
	create: function() {
		gameObj.redTower = null;
		gameObj.blueTower = null;

		this.stage.backgroundColor = 0xffffff;

		// Backgrounds
		let backgrounds = this.add.group();

		let red_BG = this.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 40, 465, 670);
		red_BG.endFill();
		backgrounds.add(red_BG);

		let blue_BG = this.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 40, 465, 670);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds

		var redScore = 0;
		var blueScore = 0;

		timerBar = this.add.sprite(10, 10, "timer_bar");

		//COUNTDOWN
		timerSeconds = 120;
		gameObj.timeLeft = timerSeconds;
		timerObj = this.game.time.create(false);
		timerObj.loop(Phaser.Timer.SECOND / 60, this.updateTimer, this);
		timerObj.start();

		gameObj.redTower = {
			rectangles: Array(),
			height: 0,
			group: this.add.group(),
			hover: null,
			width: 280,
			topX: 0,
			dimensions: []
		};

		gameObj.redTower.group.y = 600;
		gameObj.redTower.group.x = 100;

		this.addBlock(gameObj.redTower, 280, 0);

		gameObj.blueTower = {
			rectangles: Array(),
			height: 0,
			group: this.add.group(),
			hover: null,
			width: 280,
			topX: 0,
			dimensions: []
		};

		gameObj.blueTower.group.y = 600;
		gameObj.blueTower.group.x = 575;

		this.addBlock(gameObj.blueTower, 280, 0);

		redScore = this.add.text(180, 55, "Height: 1", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});
		blueScore = this.add.text(655, 55, "Height: 1", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});

		keyA = this.input.keyboard.addKey(Phaser.Keyboard.A);
		keyA.onDown.add(function() {
			let tower = gameObj.redTower;

			let towerX = tower.topX;
			let hoverX = tower.hover.x - 80;
			let width = tower.width;

			let x = null;

			console.log(hoverX - towerX);

			if (hoverX < towerX) {
				width = width - towerX + hoverX;
				x = towerX;
			} else {
				width = width - (hoverX - towerX);
				x = hoverX;
			}

			if (width <= 0) {
				this.endGame();
				return;
			}

			redScore.text = "Height: " + (gameObj.redTower.height + 1);

			tower.width = width;
			tower.topX = x;
			this.addBlock(tower, width, x);
		}, this);

		keyD = this.input.keyboard.addKey(Phaser.Keyboard.D);
		keyD.onDown.add(function() {
			let tower = gameObj.blueTower;

			let towerX = tower.topX;
			let hoverX = tower.hover.x - 80;
			let width = tower.width;

			let x = null;

			if (hoverX < towerX) {
				width = width - towerX + hoverX;
				x = towerX;
			} else {
				width = width - (hoverX - towerX);
				x = hoverX;
			}

			if (width <= 0) {
				this.endGame();
				return;
			}

			blueScore.text = "Height: " + (gameObj.blueTower.height + 1);

			tower.width = width;
			tower.topX = x;
			this.addBlock(tower, width, x);
		}, this);
	},

	update: function() {
		if (gameObj.redTower.rectangles[0].world.y - 72 * (gameObj.redTower.height - 1) > 720) {
			this.endGame();
		}

		if (gameObj.blueTower.rectangles[0].world.y - 72 * (gameObj.blueTower.height - 1) > 720) {
			this.endGame();
		}

		var maxHeight = gameObj.blueTower.rectangles[0].world.y - 72 * (gameObj.blueTower.height - 1);
		if (gameObj.blueTower.rectangles[0].world.y - 72 * (gameObj.blueTower.height - 1) > gameObj.redTower.rectangles[0].world.y - 72 * (gameObj.redTower.height - 1)) {
			maxHeight = gameObj.redTower.rectangles[0].world.y - 72 * (gameObj.redTower.height - 1);
		}

		if (maxHeight < 320) {
			gameObj.blueTower.rectangles.forEach(function(item) {
				item.body.velocity.y = 350;
			}, this);
			gameObj.blueTower.hover.body.velocity.y = 350;

			gameObj.redTower.rectangles.forEach(function(item) {
				item.body.velocity.y = 350;
			}, this);
			gameObj.redTower.hover.body.velocity.y = 350;

			gameObj.isAccelerated = true;
		} else if (gameObj.isAccelerated) {
			gameObj.blueTower.rectangles.forEach(function(item) {
				item.body.velocity.y = 50;
			}, this);
			gameObj.blueTower.hover.body.velocity.y = 50;
			gameObj.redTower.rectangles.forEach(function(item) {
				item.body.velocity.y = 50;
			}, this);
			gameObj.redTower.hover.body.velocity.y = 50;
			gameObj.isAccelerated = false;
		}
	},

	addHoverBlock: function(towerObj, width, yPos) {
		towerObj.hover ? towerObj.hover.destroy() : null;
		towerObj.hover = this.add.graphics();
		towerObj.hover.lineStyle(0, 0xf5436b, 1);
		towerObj.hover.beginFill(0xffffff, 1);

		let startX = towerObj.group.x - 80;
		let endX = 430 - width;

		towerObj.hover.drawRect(startX, yPos, width, 72);
		towerObj.hover.endFill();
		this.physics.arcade.enable(towerObj.hover);
		towerObj.hover.body.velocity.y = gameObj.isAccelerated ? 350 : 50;

		var tween = this.add.tween(towerObj.hover).to({ x: endX }, 800 + width, "Linear", true, 0, -1);
		tween.timeline[0].dt = 10;
		tween.yoyo(true);
	},

	addBlock: function(towerObj, width, x) {
		var RectangleHeight = 72;
		if (towerObj.rectangles[0]) {
			var y = towerObj.rectangles[0].position.y - 72 * towerObj.height;
		} else {
			var y = 0;
		}
		towerObj.height += 1;

		let block = this.add.graphics();
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, 1);
		block.drawRect(x, y, width, RectangleHeight);
		block.endFill();

		this.add.tween(block).to({ alpha: 0.5 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);

		this.physics.arcade.enable(block);
		block.body.velocity.y = gameObj.isAccelerated ? 350 : 50;

		towerObj.rectangles.push(block);
		towerObj.group.add(block);

		towerObj.dimensions.push({
			y: towerObj.height - 1,
			x: x / 280,
			w: width / 280
		});

		this.addHoverBlock(towerObj, width, towerObj.rectangles[0].world.y - 72 * (towerObj.height + 0.5));
		console.log(towerObj.dimensions);
	},

	endGame: function() {
		for (index in gameObj.blueTower.rectangles) {
			this.world.remove(gameObj.blueTower.rectangles[index]);
		}

		if (gameObj.redTower.height >= 20 && gameObj.blueTower.height >= 20) {
			this.state.start("Win");
		} else {
			this.state.start("Lose");
		}
	},
	updateTimer: function() {
		gameObj.timeLeft -= 1 / 60;
		if (gameObj.timeLeft <= 0) {
			this.endGame();
		}
		timerBar.scale.x = gameObj.timeLeft / timerSeconds;
	}
};
