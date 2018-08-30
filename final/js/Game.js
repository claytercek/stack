gameObj.Game = function(game) {
    var redTower;
    var blueTower;
	var redScore;
	var blueScore;
	var timerObj;
	var timerSeconds;
	var timerBar;
    var hoverRed;
    var hoverBlue;
    var isAccelerated = false;
};



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


		gameObj.redScore = 0;
		gameObj.blueScore = 0;

		timerBar = this.add.sprite(10,10,"timer_bar")

		//COUNTDOWN
		timerSeconds = 80;
        gameObj.timeLeft = timerSeconds;
		timerObj = this.game.time.create(false);
		timerObj.loop(Phaser.Timer.SECOND/60, this.updateTimer, this);
		timerObj.start();


		let blue_BG = this.make.graphics();
		blue_BG.lineStyle(0, 0x438eeb, 1);
		blue_BG.beginFill(0x438eeb, 1);
		blue_BG.drawRect(485, 40, 465, 670);
		blue_BG.endFill();
		backgrounds.add(blue_BG);
		// End Backgrounds
        
        redTower = {
            rectangles : Array(),
            height : 0,
            group : this.add.group(),
            hover: null
        }
        
        
        redTower.group.y = 600;
        redTower.group.x = 100;
        
        this.addBlock(redTower,280,0);
        
        blueTower = {
            rectangles : Array(),
            height : 0,
            group : this.add.group(),
            hover: null
        }
        
        
        blueTower.group.y = 600;
        blueTower.group.x = 575;
        
        this.addBlock(blueTower,280,0);
        
        

		redScore = this.add.text(180, 55, "Height: 0", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});
		blueScore = this.add.text(655, 55, "Height: 0", {
			fill: "#FFFFFF",
			font: "600 32px Raleway"
		});
        
        
        
        keyA = this.input.keyboard.addKey(Phaser.Keyboard.A);
		keyA.onDown.add(function() {this.addBlock(redTower,280,0)}, this);

		keyD = this.input.keyboard.addKey(Phaser.Keyboard.D);
		keyD.onDown.add(function() {this.addBlock(blueTower,280,0)}, this);
        

	},
    
    update: function() {
        if (redTower.rectangles[0].world.y - (72 * (redTower.height - 1)) > 720 ) {
            if (gameObj.redScore >= 100 && gameObj.blueScore >= 100) {
				this.state.start("Win")
			} else {
				this.state.start("Lose")
			}
        }
        
        if (blueTower.rectangles[0].world.y - (72 * (blueTower.height - 1)) > 720 ) {
            if (gameObj.redScore >= 100 && gameObj.blueScore >= 100) {
				this.state.start("Win")
			} else {
				this.state.start("Lose")
			}
        }
        
        
        var maxHeight = (blueTower.rectangles[0].world.y - (72 * (blueTower.height - 1)));
        if ((blueTower.rectangles[0].world.y - (72 * (blueTower.height - 1))) > (redTower.rectangles[0].world.y - (72 * (redTower.height - 1)))) {
            maxHeight = (redTower.rectangles[0].world.y - (72 * (redTower.height - 1)))
        }
        
        if (maxHeight < 200 ) {
            blueTower.rectangles.forEach(function(item) {
                item.body.velocity.y = 250;
                
            }, this);
            blueTower.hover.body.velocity.y = 250;

            redTower.rectangles.forEach(function(item) {
                item.body.velocity.y = 250;
            }, this);
            redTower.hover.body.velocity.y = 250;
            
            gameObj.isAccelerated = true;
            
        } else if (gameObj.isAccelerated) {
            blueTower.rectangles.forEach(function(item) {
                item.body.velocity.y = 50;
            }, this);
            blueTower.hover.body.velocity.y = 50;
            redTower.rectangles.forEach(function(item) {
                item.body.velocity.y = 50;
            }, this);
            redTower.hover.body.velocity.y = 50;
            gameObj.isAccelerated = false;
        }
    },
    
    addHoverBlock: function(towerObj, width, yPos) {
        (towerObj.hover) ? towerObj.hover.destroy() : null ;
        towerObj.hover = this.add.graphics(); 
        towerObj.hover.lineStyle(0, 0xf5436b, 1);
        towerObj.hover.beginFill(0xffffff, 1);
        towerObj.hover.drawRect(towerObj.group.x - 80, yPos, width, 72);
        towerObj.hover.endFill();
        this.physics.arcade.enable(towerObj.hover);
        towerObj.hover.body.velocity.y = (gameObj.isAccelerated) ? 250 : 50;
    },
    
	addBlock: function(towerObj, width, x) {
        var RectangleHeight = 72;
        if (towerObj.rectangles[0]) {
            var y =  towerObj.rectangles[0].position.y - (72 * towerObj.height);
        } else {
            var y = 0;
        }
        towerObj.height += 1;
        
		let block = this.add.graphics(); 
		block.lineStyle(0, 0xf5436b, 1);
		block.beginFill(0xffffff, 1);
		block.drawRect(x, y, width, RectangleHeight);
		block.endFill();
        
        this.add.tween(block).to( { alpha: .5 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        
        this.physics.arcade.enable(block);
        block.body.velocity.y = (gameObj.isAccelerated) ? 250 : 50;
        
        towerObj.rectangles.push(block)
        towerObj.group.add(block);
        
        
        this.addHoverBlock(towerObj, width, (towerObj.rectangles[0].world.y - (72 * (towerObj.height + 1))))
	},
    
    
	win: function() {
		this.state.start("Win");
	},
	lose: function() {
		this.state.start("Lose");
	},
	addPointRed: function() {
		gameObj.redScore += 10;
		redScore.text = "Height: " + gameObj.redScore;
	},
	addPointBlue: function() {
		gameObj.blueScore += 10;
		blueScore.text = "Height: " + gameObj.blueScore;
	},
	updateTimer: function() {
		gameObj.timeLeft -= 1/60;
		if (gameObj.timeLeft <= 0 ) {
			if (gameObj.redScore >= 100 && gameObj.blueScore >= 100) {
				this.state.start("Win")
			} else {
				this.state.start("Lose")
			}
		}
		timerBar.scale.x = ( gameObj.timeLeft ) / timerSeconds;
	}
};
