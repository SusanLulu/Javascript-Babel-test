class FlashMessage{
  constructor(message){
    this.message = message;
  }

  display(){
    alert(this.message);
  }
}

let flash = new FlashMessage("you succeed! babel work done");
flash.display();
