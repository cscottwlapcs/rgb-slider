var scottSlider, moneySlider, bakerSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    scottSlider = createSlider(0, 255, 112);
    scottSlider.position(20, 20);
    
    moneySlider = createSlider(0, 255, 12);
    moneySlider.position(20, 50);
    
    bakerSlider = createSlider(0, 255, 67);
    bakerSlider.position(20, 80);
}

function draw(){
    redRuby = scottSlider.value();
    greenSavage = moneySlider.value();
    blueKiller = bakerSlider.value();
    
    background(0,0,0);
}