window.onload = function() {
	var game = new Phaser.Game(960, 720, Phaser.AUTO, "phaser-canvas", { preload: preload, create: create, render: render });

	function preload() {}

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

		let red_blocks = game.add.group();
		makeBlock(25, 25, 50, 50, 1, red_blocks);
	}

	//Makes white rectangle
	// Adds rectangle to given group
	function makeBlock(x1, y1, x2, y2, opacity, group) {
		let block = game.add.graphics(); // adds to the world stage
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, opacity);
		block.drawRect(x1, y1, x2, y2);
		block.endFill();
		group.add(block);
	}
}; //end onload function
