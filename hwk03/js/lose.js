window.onload = function() {
	var game = new Phaser.Game(960, 720, Phaser.AUTO, "phaser-canvas", { preload: preload, create: create });

	WebFontConfig = {
		//  'active' means all requested fonts have finished loading
		//  We set a 1 second delay before calling 'createText'.
		//  For some reason if we don't the browser cannot render the text the first time it's created.
		active: function() {
			game.time.events.add(Phaser.Timer.SECOND / 5, createText, this);
		},

		//  The Google Fonts we want to load (specify as many as you like in the array)
		google: {
			families: ["Raleway:900,300,600"]
		}
	};

	function preload() {
		game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
		game.load.image("space", "./imgs/spaceBG.png");
		game.load.image("loseR", "./imgs/LoseBlocksRed.png");
		game.load.image("loseB", "./imgs/LoseBlocksBlue.png");
	}

	function create() {
		game.stage.backgroundColor = 0xffffff;

		// Backgrounds
		let backgrounds = game.add.group();

		let red_BG = game.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 10, 465, 700);
		red_BG.endFill();
		backgrounds.add(red_BG);

		let blue_BG = game.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 10, 465, 700);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds

		var spaceBG = game.add.sprite(190, 182, "space");
		var loseR = game.add.sprite(78, 529, "loseR");
		var loseB = game.add.sprite(567, 435, "loseB");

		makeBlock(255, 527, 88, 3);
		makeBlock(735, 432, 88, 3);
	}

	//Makes white rectangle
	// Adds rectangle to given group
	function makeBlock(x1, y1, w, h, opacity, group) {
		let o = opacity ? opacity : 1;
		let block = game.add.graphics(); // adds to the world stage
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, o);
		block.drawRect(x1, y1, w, h);
		block.endFill();
		group ? group.add(block) : "";
	}

	function createText() {
		var bodyText =
			"Stack tests your ability to multitask by having you play two versions of the game simoultaneously. Your goal is to get the stacks as tall as possible, but beware! The stacks are sinking, and if a part of the block hangs off the edge, it will be sliced off! Your goal is to get as high as possible in 2 minutes!";
		var gameText = game.add.text(50, 15, "GAME", { fill: "#FFFFFF", font: "900 130px Raleway" });
		var overText = game.add.text(545, 15, "OVER", { fill: "#FFFFFF", font: "900 130px Raleway" });

		var pressSpace_1 = game.add.text(135, 188, "press", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });
		var pressSpace_2 = game.add.text(205, 188, "space", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressSpace_3 = game.add.text(283, 188, "to restart", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		var heightRed = game.add.text(152, 509, "Height: 8", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var heightBlue = game.add.text(624, 414, "Height: 12", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });

		// text.inputEnabled = true;
		// text.input.enableDrag();

		// text.events.onInputOver.add(over, this);
		// text.events.onInputOut.add(out, this);
	}
}; //end onload function
