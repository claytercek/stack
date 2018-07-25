window.onload = function() {
	var game = new Phaser.Game(960, 720, Phaser.AUTO, "phaser-canvas", { preload: preload, create: create });

	function preload() {
		game.load.image("background", "./img/background.png");
		game.load.image("marker", "img/marker.png");
		game.load.spritesheet("playButton", "img/play_button.png", 180, 90);
	}

	function create() {
		var sp_background = game.add.sprite(0, 0, "background");
		var sp_Marker = game.add.sprite(game.world.centerX, game.world.centerY, "marker");
		sp_Marker.anchor.setTo(0.5, 0.5);

		var scoreNum = 1200;

		var generalStyle = {
			width: "150px",
			font: "35px Arial",
			fill: "black",
			align: "left"
		};

		var txScore = game.add.text(25, 15, scoreNum, generalStyle);

		// Add button
		// the numbers given are the indices of the frames in this order: OVER, OUT, DOWN
		var bt_Play = game.add.button(25, 150, "playButton", actionOnClick, this, 1, 0, 2);
	}

	function actionOnClick() {
		// alert("play button clicked")
	}
}; //end onload function
