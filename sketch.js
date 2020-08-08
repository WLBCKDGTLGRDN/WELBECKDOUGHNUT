var angle = 0;
let AX = 0.0;
let AY = 0.0;
let AZ = 0.0;
let CX = 0.0;
let CY = 0.0;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	jsonpos = loadJSON('http://www.welbeckdigitalgarden.co.uk:3000//JSON', posvalues);
}

function draw(){
	background(0);
	frameRate(8);
	jsonpos = loadJSON('http://www.welbeckdigitalgarden.co.uk:3000//JSON', posvalues);
	rectMode(CENTER);

    let xa = (AX/10)*(AX/10);
    let ya = (AY/10)*(AY/10);
    let za = (AZ/10)*(AZ/10);
    let xc = (CX/10)*(CX/10);
    let yc = (CY/10)*(CY/10);

    print(xa);
    print(ya);
    print(za);

    rotateX(xa + angle*10);
    rotateY(ya + angle*10);
    rotateZ(za + angle*10);

	ambientLight(255, 255, 255);

	//noStroke();
	fill(200, 220, 50);
	torus(160, 45, 18, 15);

    rotateX(xc + angle*10);
    rotateY(yc + angle*10);

    ambientLight(200, 200, 200);

    fill(100, 0, 200);
    torus(220, 25, 18, 15);

	angle += 0.01
}

function posvalues(PosJSON){

	AX = PosJSON.MagX;
	AY = PosJSON.MagY;
	AZ = PosJSON.MagZ;
	CX = PosJSON.Pitch;
	CY = PosJSON.Roll;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}