var gameObj = {
  // Global variables are decleared here!
  gScore: 3770,
  gTime: "00:00"
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");
    this.load.image('preloaderBg',"img/loading-bg.png")
    this.load.image('preloaderBar',"img/loading-bar.png")

  },
  create: function () {
    this.state.start('Preloader')
  }
};
