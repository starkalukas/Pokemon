let sprite = document.getElementById('sprite');
let pokeball = document.getElementById('pokeball');

let moveDown = new Array(3);
let moveUp = new Array(3);
let moveLeft = new Array(3);
let moveRight = new Array(3);
let pokeballs;

let frame = 0;
let frame2 = 1;
let frame3 = 3;

let countNormal = 0;
let countSuper = 0;
let countHyper = 0;
let countMaster = 0;
let actualCount;

let canMove = true;
let runEvolution = true;
let interval;
let evolution1Done = false;
let evolution2Done = false;

let allowedToAnimate = true;

let keyDown;
let keyUp;
let keyRight;
let keyLeft;
let keyCodeS = 83;
let keyCodeW = 87;
let keyCodeA = 65;
let keyCodeD = 68;
let keyCodeDOWN = 40;
let keyCodeUP = 38;
let keyCodeLEFT = 37;
let keyCodeRIGHT = 39;
let keyMode;

let controlReady = true;
let pokemonReady = true;

let pokemon;
let pokemon2;
let pokemon3;

let newBackgroundColor;

document.getElementById('wasd').addEventListener('click', wasd);
document.getElementById('arrows').addEventListener('click', arrows);
document.getElementById('button').addEventListener('click', changeDesign);
document.getElementById('rightButton').addEventListener('click', rightSlide);
document.getElementById('leftButton').addEventListener('click', leftSlide);
document.getElementById('darkred').addEventListener('click', () =>{
    setbackgroundColor('darkred', 'black');
});
document.getElementById('red').addEventListener('click', () =>{
    setbackgroundColor('red', 'black');
});
document.getElementById('orange').addEventListener('click', () =>{
    setbackgroundColor('orange', 'black');
});
document.getElementById('blue').addEventListener('click', ()=>{
    setbackgroundColor('blue', 'black');
});
document.getElementById('purple').addEventListener('click', ()=>{
    setbackgroundColor('purple', 'black');
});
document.getElementById('lightblue').addEventListener('click', ()=>{
    setbackgroundColor('lightblue', 'black');
});
document.getElementById('green').addEventListener('click', () =>{
    setbackgroundColor('green', 'black');
});
document.getElementById('lawngreen').addEventListener('click', ()=>{
    setbackgroundColor('lawngreen', 'black');
});
document.getElementById('yellow').addEventListener('click', ()=>{
    setbackgroundColor('yellow', 'black');
});

function setbackgroundColor(color, chosenColor){
    if(document.getElementById(color).style.borderColor == chosenColor){
        document.getElementById(color).style.borderColor = color;
        newBackgroundColor = '';
    }
    else{
        for (const element of document.getElementsByClassName('color')) {
            if(element.style.borderColor == 'black'){
                element.style.borderColor = 'rgba(0,0,0,0.0)';
            }
        }
        document.getElementById(color).style.borderColor = chosenColor;
        newBackgroundColor = color;
    }
}
function animation(){
    getKeys();
    choosePokemon();
    document.onkeydown = interpretKey;
    document.onkeyup = setImageBack;
}
function choosePokemon(){
    spawnpokeball();
    getPokemon();
}
function getPokemon(){
    pokemon = 'chikorita';
    pokemon2 = 'croconaw';
    pokemon3 = 'feraligatr';

    switch(frame3){
        case 1:
            pokemon = 'charmander';
            pokemon2 = 'charmeleon';
            pokemon3 = 'charizard';
            break;
        case 2:
            pokemon = 'squirtle';
            pokemon2 = 'wartortle';
            pokemon3 = 'blastoise';
            break;
        case 3:
            pokemon = 'dratini';
            pokemon2 = 'dragonair';
            pokemon3 = 'dragonite';
            break;
        case 4:
            pokemon = 'cyndaquil';
            pokemon2 = 'quilava';
            pokemon3 ='typhlosion' ;
            break;
        case 5:
            pokemon = 'totodile';
            pokemon2 = 'croconaw';
            pokemon3 = 'feraligatr';
            break;
        case 6:
            pokemon = 'chikorita';
            pokemon2 = 'bayleef';
            pokemon3 = 'meganium';
            break;
        case 7:
            pokemon = 'torchic';
            pokemon2 = 'combusken';
            pokemon3 = 'blaziken';
            break;
        case 8:
            pokemon = 'mudkip';
            pokemon2 = 'marshtomp';
            pokemon3 = 'swampert';
            break;
        case 9:
            pokemon = 'treecko';
            pokemon2 = 'grovyle';
            pokemon3 = 'sceptile';
            break;
        case 10:
            pokemon = 'chimchar';
            pokemon2 = 'monferno';
            pokemon3 = 'infernape';
            break;
        case 11:
            pokemon = 'piplup';
            pokemon2 = 'prinplup';
            pokemon3 = 'empleon';
            break;
        case 12:
            pokemon = 'turtwig';
            pokemon2 = 'grotle';
            pokemon3 = 'torterra';
            break;
    }
    moveDown = ['./images/' + pokemon + '_down1.png','./images/' + pokemon + '_down2.png', './images/' + pokemon + '_down3.png'];
    moveUp = ['./images/' + pokemon + '_up1.png','./images/' + pokemon + '_up2.png', './images/' + pokemon + '_up3.png'];
    moveLeft = ['./images/' + pokemon + '_left1.png','./images/' + pokemon + '_left2.png', './images/' + pokemon + '_left3.png'];
    moveRight = ['./images/' + pokemon + '_right1.png','./images/' + pokemon + '_right2.png', './images/' + pokemon + '_right3.png'];
}
function interpretKey(key){
    if(canMove){
        if(!key){
            key = window.event;
        }
        if(key.keyCode == keyUp){ 
            movesprite(0 , -1);
            if(allowedToAnimate){
                animateSprite(moveUp);
            }
        }
        else if(key.keyCode == keyLeft){
            movesprite(-1, 0);
            if(allowedToAnimate){
                animateSprite(moveLeft);
            }
            
        }
        else if(key.keyCode == keyDown){
            movesprite(0 ,1);
            if(allowedToAnimate){
                animateSprite(moveDown);
            }
        }   
        else if(key.keyCode == keyRight){
            movesprite(1, 0);
            if(allowedToAnimate){
                animateSprite(moveRight);
            }
        }
    }
}
function movesprite(leftMovement, topMovement){
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);
    let xPokeball = parseInt(pokeball.style.left);
    let yPokeball = parseInt(pokeball.style.top);

    x += leftMovement;
    y += topMovement;

    if(x < 0){
        allowedToAnimate = false;
        x = 0;
    }
    else if(x > 75){
        allowedToAnimate = false;
        x = 75;
    }
    else if(y < 0){
        allowedToAnimate = false;
        y = 0;
    }
    else if(y > 70){
        allowedToAnimate = false;
        y = 70;
    }
    else{
        allowedToAnimate = true;
    }

    sprite.style.left = x + 'vw';
    sprite.style.top = y + 'vh';
    
    if((x == xPokeball) || (x + 1 == xPokeball) || (x - 1 == xPokeball)){
        if((y == yPokeball) || (y + 1 == yPokeball) || (y - 1 == yPokeball)){
            switch(actualCount){
                case 'Normal':
                    countNormal++;
                    break;
                case 'Super':
                    countSuper++;
                    break;
                case 'Hyper':
                    countHyper++;
                    break;
                case 'Master':
                    countMaster++;
                    break;
            }
        spawnpokeball();
        }
            
    }
    evolution();
    if(evolution2Done){
        document.getElementById('countPokeballs').innerHTML = 'x ' + countNormal;
        document.getElementById('countSuperballs').innerHTML = 'x ' + countSuper;
        document.getElementById('countHyperballs').innerHTML = 'x ' + countHyper;
        document.getElementById('countMasterballs').innerHTML = 'x ' + countMaster;
    }
    else if(evolution1Done){
        document.getElementById('countPokeballs').innerHTML = 'x ' + countNormal + '/ 50';
        document.getElementById('countSuperballs').innerHTML = 'x ' + countSuper + '/ 25';
        document.getElementById('countHyperballs').innerHTML = 'x ' + countHyper + '/ 15';
        document.getElementById('countMasterballs').innerHTML = 'x ' + countMaster + '/ 5';
        checkReady2();
    }
    if(!evolution1Done){
        document.getElementById('countPokeballs').innerHTML = 'x ' + countNormal + '/ 10';
        document.getElementById('countSuperballs').innerHTML = 'x ' + countSuper + '/ 5';
        document.getElementById('countHyperballs').innerHTML = 'x ' + countHyper + '/ 3';
        document.getElementById('countMasterballs').innerHTML = 'x ' + countMaster + '/ 1';
        checkReady();
    }
    
    
}
function checkReady(){
    if(countNormal >= 10){
        document.getElementById('countPokeballs').style.color = 'yellow';
    }
    if(countSuper >= 5){
        document.getElementById('countSuperballs').style.color = 'yellow';
    }
    if(countHyper >= 3){
        document.getElementById('countHyperballs').style.color = 'yellow';
    }
    if(countMaster >= 1){
        document.getElementById('countMasterballs').style.color = 'yellow';
    }
}
function checkReady2(){
    if(countNormal >= 50){
        document.getElementById('countPokeballs').style.color = 'yellow';
    }
    if(countSuper >= 25){
        document.getElementById('countSuperballs').style.color = 'yellow';
    }
    if(countHyper >= 15){
        document.getElementById('countHyperballs').style.color = 'yellow';
    }
    if(countMaster >= 5){
        document.getElementById('countMasterballs').style.color = 'yellow';
    }
}
function animateSprite(directionArray){
    frame++;
    if(frame >= directionArray.length){
        frame = 0;
    }
    sprite.src = directionArray[frame];
    
}
function spawnpokeball(){
    let perCentRatePokeball = Math.floor((Math.random() * 100) + 1);
    let positionXPokeball = Math.floor((Math.random() * 75));
    let positionYPokeball = Math.floor((Math.random() * 70));

    if(perCentRatePokeball <= 50){
        pokeballs = './images/pokeball_normal1.png';
        actualCount = 'Normal';
    }
    else if(perCentRatePokeball <= 80){
        pokeballs = './images/pokeball_super1.png';
        actualCount = 'Super';
    }
    else if(perCentRatePokeball <= 95){
        pokeballs = './images/pokeball_hyper1.png';
        actualCount = 'Hyper';
    }
    else{
        pokeballs = './images/pokeball_master1.png';
        actualCount = 'Master';
    }
    pokeball.src = pokeballs;
    pokeball.style.left = positionXPokeball + 'vw';
    pokeball.style.top = positionYPokeball + 'vh';
   
}
function evolution(){
    if((countNormal >= 10) && (countSuper >= 5) && (countHyper >= 3) && (countMaster >= 1)){
        if((countNormal >= 50) && (countSuper >= 25) && (countHyper >= 15) && (countMaster >= 5)){
            if(!evolution2Done){
                evolution2();
            }
        }
        else{
            if(!evolution1Done){
                evolution1();
            }
            
        }
    }
}
function evolution1(){
    canMove = false;
    interval = setInterval('animateEvolution()', 100);
    setTimeout(changeToSecond, 1900);
    document.getElementById('countPokeballs').style.color = 'black';
    document.getElementById('countSuperballs').style.color = 'black';
    document.getElementById('countHyperballs').style.color = 'black';
    document.getElementById('countMasterballs').style.color = 'black';
    evolution1Done = true;
}
function evolution2(){
    canMove = false;
    interval = setInterval('animateEvolution()', 100);
    setTimeout(changeToThird, 1900);
    document.getElementById('countPokeballs').style.color = 'black';
    document.getElementById('countSuperballs').style.color = 'black';
    document.getElementById('countHyperballs').style.color = 'black';
    document.getElementById('countMasterballs').style.color = 'black';
    evolution2Done = true;
}

function animateEvolution(){
    frame2++;
    if(frame2 > 7){
        frame2 = 1;
    }
    sprite.src = './images/evolution' + frame2 + '.png';
}
function changeToSecond(){
    clearInterval(interval);

    sprite.src = './images/' + pokemon2 + '_down1.png';

    moveDown = ['./images/' + pokemon2 + '_down1.png','./images/' + pokemon2 + '_down2.png', './images/' + pokemon2 + '_down3.png'];
    moveUp = ['./images/' + pokemon2 + '_up1.png','./images/' + pokemon2 + '_up2.png', './images/' + pokemon2 + '_up3.png'];
    moveLeft = ['./images/' + pokemon2 + '_left1.png','./images/' + pokemon2 + '_left2.png', './images/' + pokemon2 + '_left3.png'];
    moveRight = ['./images/' + pokemon2 + '_right1.png','./images/' + pokemon2 + '_right2.png', './images/' + pokemon2 + '_right3.png'];


    canMove = true;
}
function changeToThird(){
    clearInterval(interval);

    sprite.src = './images/' + pokemon3 + '_down1.png';

    moveDown = ['./images/' + pokemon3 + '_down1.png','./images/' + pokemon3 + '_down2.png', './images/' + pokemon3 + '_down3.png'];
    moveUp = ['./images/' + pokemon3 + '_up1.png','./images/' + pokemon3 + '_up2.png', './images/' + pokemon3 + '_up3.png'];
    moveLeft = ['./images/' + pokemon3 + '_left1.png','./images/' + pokemon3 + '_left2.png', './images/' + pokemon3 + '_left3.png'];
    moveRight = ['./images/' + pokemon3 + '_right1.png','./images/' + pokemon3 + '_right2.png', './images/' + pokemon3 + '_right3.png'];

    canMove = true;
}
function setImageBack(key){
    if(canMove){
        if(key.keyCode == keyUp){
            sprite.src = moveUp[0];
        }
        else if(key.keyCode == keyDown){
            sprite.src = moveDown[0];
        }
        else if(key.keyCode == keyRight){
            sprite.src = moveRight[0];
        }
        else if(key.keyCode == keyLeft){
            sprite.src = moveLeft[0];
        }
    }
    
}
function getKeys(){
    if(keyMode == 'WASD'){
        keyDown = keyCodeS;
        keyLeft = keyCodeA;
        keyRight = keyCodeD;
        keyUp = keyCodeW;
    }
    else if(keyMode == 'Arrows'){
        keyDown = keyCodeDOWN;
        keyLeft = keyCodeLEFT;
        keyRight = keyCodeRIGHT;
        keyUp = keyCodeUP;
    }
}
function wasd(){
    if(document.getElementById('wasd').style.borderColor == 'black'){
        document.getElementById('wasd').style.borderColor = 'rgba(0,0,0,0.0)';
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('wasd').style.borderColor = 'black';
        document.getElementById('button').disabled = false;
    }
    document.getElementById('arrows').style.borderColor = 'rgba(0,0,0,0.0)';

    keyMode = 'WASD';
}
function arrows(){
    if(document.getElementById('arrows').style.borderColor == 'black'){
        document.getElementById('arrows').style.borderColor = 'rgba(0,0,0,0.0)';
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('arrows').style.borderColor = 'black';
        document.getElementById('button').disabled = false;
    }
    document.getElementById('wasd').style.borderColor = 'rgba(0,0,0,0.0)';

    keyMode = 'Arrows';
}
function changeDesign(){
    document.getElementById('body').removeChild(document.getElementById('wrapper'));
    document.getElementById('newbody').style.display = 'block';

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = newBackgroundColor;
    animation();
}

function init(){
    document.getElementById('button').disabled = true;

}
function rightSlide(){
    frame3++;

    if(frame3 >= 9){
        frame3 = 3;
    }

    document.getElementById('pokeImage').src = './images/pokemon' + frame3 + '.png';
}
function leftSlide(){
    frame3--;

    if(frame3 <= 2){
        frame3 = 8;
    }
    
    document.getElementById('pokeImage').src = './images/pokemon' + frame3 + '.png';
}