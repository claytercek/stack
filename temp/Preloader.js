gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor = '#333';

    // Progress bar animation code
    this.preloadBg = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
    this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) / 2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);
    //
    this.load.spritesheet('playButton', 'img/play_button.png', 180, 90);

    // Load ALL GAME images into memory
    this.load.image('logo', 'img/title.png');
    this.load.image('background', 'img/background.png');

    this.load.image('logoWin', 'img/win_title.png');
    this.load.image('logoLoser', 'img/lose_title.png');

    this.load.image('small_white_cell', 'img/small_white_cell.png');
    this.load.image('small_healthy_cell', 'img/small_healthy_cell.png');
    this.load.image('small_time', 'img/small_time.png');
    this.load.image('small_marker', 'img/small_marker.png');

    this.load.image('marker', 'img/marker.png');
    this.load.image('sick_cell', 'img/sick_cell_game.png');
    this.load.image('healthy_cell', 'img/healthy_cell_game.png');
    this.load.image('white_cell', 'img/white_cell_game.png');

    this.load.image('logo_winner', 'img/win_title.png');
    this.load.image('logo_loser', 'img/lose_title.png');

    // replay button
    this.load.spritesheet('replayButton', 'img/replay_button.png', 180, 90);

    //  Load the Google WebFont Loader script
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    //Add background image
    this.load.image('background', 'img/background.png');
    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    this.load.spritesheet('mummy', 'img/metalslug_mummy37x45.png', 37, 45, 18);

    // Load temp buttons
    this.load.spritesheet('winButton', 'img/btn_win.png', 90, 90);
    this.load.spritesheet('loseButton', 'img/btn_lose.png', 90, 90);
      
    //170731 .. jwt Load Points button
    this.load.spritesheet('pointsButton', 'img/btn_points.png', 90, 90);
		
		this.load.spritesheet('rollButton', 'img/btn_roll.png', 90, 90);
		
		this.load.audio('pong', 'snd/pong.mp3')
  },
  create: function () {
    // Comment out the line below to check preloader animation
    this.state.start('Main');
  }
};
