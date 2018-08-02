var gameObj = {
  // Global variables are decleared here!
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");
    this.load.image('preloaderBg', "imgs/loadBarbg.png")
    this.load.image('preloaderBar', "imgs/loadBarred.png")

  },
  create: function () {
    this.state.start('Preloader')
  }
};