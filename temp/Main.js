gameObj.Main = function (game) {};

gameObj.Main.prototype = {
  create: function () {
    console.log('State - Main');
    //Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    spBackground.anchor.setTo(0.5, 0.5);

    //Add title image
    var spLogo = this.add.sprite(this.world.centerX, this.world.centerY - 250, 'logo');
    spLogo.anchor.setTo(0.5, 0.5);

    //Add button
    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    btPlay = this.add.button(this.world.centerX, this.world.centerY - 120, 'playButton', this.actionOnClick, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);

    //Add list graphics
    var spMarker = this.add.sprite(this.world.centerX - 230, this.world.centerY - 70, 'small_marker');
    var spWhiteCell = this.add.sprite(this.world.centerX - 230, this.world.centerY + 30, 'small_white_cell');
    var spHealthyCell = this.add.sprite(this.world.centerX - 230, this.world.centerY + 140, 'small_healthy_cell');
    var spTime = this.add.sprite(this.world.centerX - 230, this.world.centerY + 230, 'small_time');

    //Add text
    var txFirst = this.add.text(this.world.centerX - 100, this.world.centerY - 40, 'Click to move');
    var txSecond = this.add.text(this.world.centerX - 100, this.world.centerY + 60, 'Avoid to survive');
    var txThird = this.add.text(this.world.centerX - 100, this.world.centerY + 170, 'Touch for points');
    var txFourth = this.add.text(this.world.centerX - 100, this.world.centerY + 260, 'Survive the countdown timer');

    txFirst.fill = 'black'
    txSecond.fill = 'black'
    txThird.fill = 'black'
    txFourth.fill = 'black';

    txFirst.font = 'Zilla Slab';
    txSecond.font = 'Zilla Slab';
    txThird.font = 'Zilla Slab';
    txFourth.font = 'Zilla Slab';

    txFirst.fontSize = 36;
    txSecond.fontSize = 36;
    txThird.fontSize = 36;
    txFourth.fontSize = 36;
  },
  actionOnClick: function () {
    console.log('actionOnClick called');
    this.state.start('Play');
  }
};
