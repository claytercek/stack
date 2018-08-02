gameObj.Intro = function (game) {};

gameObj.Intro.prototype = {
  create: function () {
	console.log('State - Intro');
	this.stage.backgroundColor = 0xffffff;

		// Backgrounds
		let backgrounds = this.add.group();

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

		let red_blocks = this.add.group();
		this.makeBlock(168, 363, 103, 63, 1, red_blocks);
		this.makeBlock(168, 449, 103, 63, 1, red_blocks);
		this.makeBlock(112, 512, 159, 63, 0.8, red_blocks);
		this.makeBlock(112, 575, 256, 63, 0.6, red_blocks);
		this.makeBlock(112, 638, 256, 63, 0.4, red_blocks);

		this.makeBlock(300, 449, 56, 63, 1, red_blocks);
		var line = this.add.sprite(285, 449, "dots");

		let blue_blocks = this.add.group();
		this.makeBlock(661, 363, 102, 63, 1, blue_blocks);
		this.makeBlock(661, 450, 102, 63, 1, blue_blocks);
		this.makeBlock(661, 512, 102, 63, 0.8, blue_blocks);
		this.makeBlock(592, 575, 171, 63, 0.6, blue_blocks);
		this.makeBlock(592, 638, 256, 63, 0.4, blue_blocks);

		var spaceBG = this.add.sprite(190, 182, "space");
		var aBG = this.add.sprite(156, 293, "aBG");
		var bBG = this.add.sprite(626, 293, "aBG");


		var bodyText =
			"Stack tests your ability to multitask by having you play two versions of the game simoultaneously. Your goal is to get the stacks as tall as possible, but beware! The stacks are sinking, and if a part of the block hangs off the edge, it will be sliced off! Your goal is to get as high as possible in 2 minutes!";
		var title = this.add.text(30, 15, "STACK", { fill: "#FFFFFF", font: "900 130px Raleway" });
		var description = this.add.text(505, 36, bodyText, { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 16px Raleway" });

		var pressSpace_1 = this.add.text(135, 188, "press", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });
		var pressSpace_2 = this.add.text(205, 188, "space", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressSpace_3 = this.add.text(283, 188, "to start", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		var pressA_1 = this.add.text(100, 300, "press", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });
		var pressA_2 = this.add.text(167, 300, "A", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressA_3 = this.add.text(197, 300, "to drop left block", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

		var pressD_1 = this.add.text(570, 300, "press", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });
		var pressD_2 = this.add.text(637, 300, "D", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "600 20px Raleway" });
		var pressD_3 = this.add.text(667, 300, "to drop right block", { fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 440, font: "300 20px Raleway" });

  },
  makeBlock: function (x1, y1, w, h, opacity, group) {
		let o = opacity ? opacity : 1;
		let block = this.add.graphics(); // adds to the world stage
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, o);
		block.drawRect(x1, y1, w, h);
		block.endFill();
		group ? group.add(block) : "";
  }
};


