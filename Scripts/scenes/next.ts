/**
 * @module scenes
 */
module scenes {
    /**
     * This class instantiates the Next Level scene object
     * 
     * @class Next
     * @extends scenes.Scene
     */
    export class Next extends scenes.Scene {
        private _blocker: HTMLElement;
        private _stage: createjs.Stage;
        private _gameNextLabel: createjs.Text;
        private _nextButton: createjs.Bitmap;

        /**  
         * Empty Contructor
         * 
         * @constructor
         */
        constructor() {
            super();

            this._initialize();
            this.start();
        }

        private _setupCanvas(): void {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        }

        /**
         * This method sets up default values for class member variables
         * and objects
         * 
         * @method _initialize
         * @return void
         */
        private _initialize(): void {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";

            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        }


        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            this._gameNextLabel = new createjs.Text(
                "GAME Next",
                "80px Consolas",
                "#000000");
            this._gameNextLabel.regX = this._gameNextLabel.getMeasuredWidth() * 0.5;
            this._gameNextLabel.regY = this._gameNextLabel.getMeasuredLineHeight() * 0.5;
            this._gameNextLabel.x = config.Screen.WIDTH * 0.5;
            this._gameNextLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._gameNextLabel);

            this._nextButton = new createjs.Bitmap(assets.getResult("NextButton"));
            this._nextButton.regX = this._nextButton.getBounds().width * 0.5;
            this._nextButton.regY = this._nextButton.getBounds().height * 0.5;
            this._nextButton.x = config.Screen.WIDTH * 0.5;
            this._nextButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._nextButton);

            this._nextButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._nextButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._nextButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.PLAY;
                changeScene();
            });
        }

        /**
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
            this._stage.update();
        }

        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            this._setupCanvas();
        }

    }
}