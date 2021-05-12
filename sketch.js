const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImage() 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/delhi")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)
    if(hour>1 && hour<3){
        bg = "sunrise1.png"
    }
    if(hour>3 && hour<5){
        bg = "sunrise2.png"
    }
    if(hour>5 && hour<7){
        bg = "sunrise3.png"
    }
    if(hour>7 && hour<9){
        bg = "sunrise4.png"
    }
    if(hour>9 && hour<11){
        bg = "sunrise5.png"
    }
    if(hour>11 && hour<13){
        bg = "sunrise6.png"
    }
    if(hour>13 && hour<15){
        bg = "sunrise7.png"
    }
    if(hour>15 && hour<17){
        bg = "sunrise8.png"
    }
    if(hour>17 && hour<19){
        bg = "sunrise9.png"
    }
    if(hour>19 && hour<21){
        bg = "sunrise10.png"
    }
    if(hour>21 && hour<23){
        bg = "sunrise11.png"
    }
    else{
        bg = "sunrise12.png" 
     }
    backgroundImg = loadImage(bg);
}