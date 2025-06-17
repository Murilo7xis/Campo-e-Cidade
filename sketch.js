let truckX = 300; // Posição X inicial do caminhão
let truckDirection = 1; // 1 para direita, -1 para esquerda
let truckSpeed = 2; // Velocidade do caminhão

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235);

  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(550, 50, 100);
  
  stroke(0);
  strokeWeight(1);
  fill("rgb(90,90,90)");
  rect(0, 300, 600, 200);
  
  stroke(0);
  strokeWeight(1);
  fill("rgb(2,0,114)");
  rect(200, 0, 400, 400);
  
  
  stroke(0);
  strokeWeight(1);
  fill("rgb(0,172,0)");
  rect(0, 300, 200, 200);
  
  textSize(100)
  text("☀️", -25, 70)
  
  textSize(50)
  text("🌑", 290, 55)
  
  fill("rgb(255,255,255)")
  textSize(50)
  text(". . : .¨. :", 220, 105) //estrela
  
   fill("rgb(255,255,255)") //estrela
  textSize(50)
  text(": . :. . .", 210, 185)
  
  
  textSize(80)
  text("🛫🛬",-7, 385)
 
  
  textSize(80)
  text("🛫🛬",80, 385)
  
  textSize(80)
  text("🛫🛬",160, 385)
  
  textSize(80)
  text("🛫",340, 385)
  
  textSize(100)
  text("🏙️",220, 280)
  
  textSize(100)
  text("🏙️",200, 309)
  
  textSize(150)
  text("🗼",270, 270)
  
  textSize(100)
  text("⛰",40, 255)
  
  textSize(100)
  text("⛰",-10, 295)
  
  textSize(100)
  text("⛰",82, 295)
  
  stroke(0);
  strokeWeight(1);
  fill("rgb(90,90,90)");
  rect(0, 300, 400, 75);
  
  stroke(0);
  strokeWeight(1);
  fill("rgb(0,172,0)");
  rect(0, 300, 200, 75);
  
  textSize(30)
  text("🌲",59, 295)
  
  textSize(30)
  text("🌳",150, 295)
  
  textSize(60)
  text("🌲🌳",0, 288)
  
  textSize(70)
  text("⛲️",220, 350)
  
  textSize(60)
  text("🚜",90, 288) //trator plantando arroz
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", 0, 305)
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", -10, 315)
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", 0, 325)
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", -10, 335)
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", 0, 345)
  
  textSize(20)
  text("🌱🌱🌱🌱🌱🌱🌱🌱", -10, 355)
  
  textSize(25)
  text("❕", 223, 377)
  
  textSize(30)
  text("🛑", 220, 355)
  
  fill("rgb(255,255,255)")
  textSize(10)
  text("PARE", 225, 349)

  // Espelha o caminhão quando se move para a direita
  push();
  if (truckDirection === 1) {
    translate(truckX + 70, 380); // Ajusta a posição para o espelhamento
    scale(-7, 7); // Espelha horizontalmente
    text("🚚", 0, 0); // Desenha o caminhão espelhado
  } else {
    
  textSize(70)
    text("🚚", truckX, 380); // Desenha o caminhão normalmente
  }
  pop();

  // Move o caminhão
  truckX += truckSpeed * truckDirection;

  // Inverte a direção quando atinge as bordas
  if (truckX + 70 > width || truckX < 0) { // 70 é uma estimativa do tamanho do emoji do caminhão
    truckDirection *= -1; // Inverte a direção
  }
}