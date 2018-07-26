gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor = 0x333333;

    // Progress Bar Anim
    this.preloadBg = this.add.sprite((820-297)/2, (700-145)/2, 'preloaderBg');
    this.preloadBar = this.add.sprite((820-156)/2, (700-50)/2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);
    //

    this.load.spritesheet('playButton','img/play_button.png',180, 90);


    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    this.load.image('background', 'img/background.png');
    this.load.image('logo', 'img/title.png');

    this.load.image('small_white_cell', 'img/small_white_cell.png');
    this.load.image('small_healthy_cell', 'img/small_healthy_cell.png');
    this.load.image('small_time', 'img/small_time.png');
    this.load.image('small_marker', 'img/small_marker.png');

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    this.load.spritesheet('mummy', 'img/metalslug_mummy37x45.png', 37, 45, 18);

    this.load.spritesheet('winButton', 'img/btn_win.png', 90, 90);
    this.load.spritesheet('loseButton', 'img/btn_lose.png', 90, 90);
    
  },
  create: function () {
    this.state.start('Main')
  }
};
