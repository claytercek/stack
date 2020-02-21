gameObj.Preloader = function(game) {};

gameObj.Preloader.prototype = {
	preload: function() {
		console.log("State - Preloader");
		this.stage.backgroundColor = 0xffffff;

		// Progress Bar Anim
		this.preloadBg = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, "preloaderBg");
		this.preloadBar = this.add.sprite((820 - 156) / 2, (700 - 50) / 2, "preloaderBar");
		this.load.setPreloadSprite(this.preloadBar);
		//

		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
		this.load.image("dots", "./imgs/dotted_line.png");
		this.load.image("space", "./imgs/spaceBG.png");
		this.load.image("aBG", "./imgs/ABG.png");

		this.load.image("loseR", "./imgs/LoseBlocksRed.png");
		this.load.image("loseB", "./imgs/LoseBlocksBlue.png");

		this.load.image("winR", "./imgs/WinBlocksRed.png");
		this.load.image("winB", "./imgs/WinBlocksBlue.png");

		this.load.image("timer_bar", "imgs/TimerRectangle.png");

		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");

		this.load.audio("drop", "./audio/drop.mp3");
		this.load.audio("win", "./audio/win.mp3");
		this.load.audio("lose", "./audio/lose.mp3");
	},
	create: function() {
		this.state.start("Intro");
	}
};
