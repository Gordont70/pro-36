class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  //setting position
  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 60);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  //setting style
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousepressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();

      // to write in different line use br to break line
      //dollar sign is to extract data
      var message = `
      Hello ${this.input.value()}
      </br> wait for another player to join`
      this.greeting.html(message);
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousepressed();
  }
}
