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
			families: ["Raleway:600"]
		}
	};

	function preload() {
		game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
	}

	function create() {
		game.stage.backgroundColor = 0xffffff;

		// Backgrounds
		let backgrounds = game.add.group();

		let red_BG = game.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 40, 465, 670);
		red_BG.endFill();
		backgrounds.add(red_BG);

		let timer = game.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 10, 600, 20);
		red_BG.endFill();
		backgrounds.add(red_BG);

		let blue_BG = game.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 40, 465, 670);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds

		let red_blocks = game.add.group();
		makeBlock(95, 644, 289, 72, 0.4, red_blocks);
		makeBlock(95, 572, 233, 72, 0.6, red_blocks);
		makeBlock(95, 500, 147, 72, 0.8, red_blocks);
		makeBlock(132, 429, 110, 72, 1, red_blocks);
		makeBlock(59, 334, 110, 72, 1, red_blocks);

		let blue_blocks = game.add.group();
		makeBlock(573, 643, 292, 72, 0.2, blue_blocks);
		makeBlock(573, 571, 268, 72, 0.4, blue_blocks);
		makeBlock(588, 499, 253, 72, 0.6, blue_blocks);
		makeBlock(595, 427, 246, 72, 0.8, blue_blocks);
		makeBlock(595, 355, 238, 72, 1, blue_blocks);
		makeBlock(684, 263, 238, 72, 1, blue_blocks);
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
		var title = game.add.text(180, 55, "Height: 4", { fill: "#FFFFFF", font: "600 32px Raleway" });
		var title = game.add.text(655, 55, "Height: 5", { fill: "#FFFFFF", font: "600 32px Raleway" });

		// text.inputEnabled = true;
		// text.input.enableDrag();

		// text.events.onInputOver.add(over, this);
		// text.events.onInputOut.add(out, this);
	}
}; //end onload function
