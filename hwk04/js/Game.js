gameObj.Game = function(game) {};

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

		let timer = this.add.graphics();
		red_BG.lineStyle(0, 0xf5436b, 1);
		red_BG.beginFill(0xf5436b, 1);
		red_BG.drawRect(10, 10, 600, 20);
		red_BG.endFill();
		backgrounds.add(red_BG);

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

		var title1 = this.add.text(180, 55, "Height: 4", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});
		var title2 = this.add.text(655, 55, "Height: 5", {
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
	}
};
