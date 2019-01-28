let keyMode;

function wasd(){
    if(document.getElementById('wasd').style.borderColor == 'black'){
        document.getElementById('wasd').style.borderColor = 'rgba(0,0,0,0.0)';
        keyMode = '';
    }
    else{
        document.getElementById('wasd').style.borderColor = 'black';
    }
    document.getElementById('arrows').style.borderColor = 'rgba(0,0,0,0.0)';

    keyMode = 'WASD';
}
function arrows(){
    if(document.getElementById('arrows').style.borderColor == 'black'){
        document.getElementById('arrows').style.borderColor = 'rgba(0,0,0,0.0)';
        keyMode = '';
    }
    else{
        document.getElementById('arrows').style.borderColor = 'black';
    }
    document.getElementById('wasd').style.borderColor = 'rgba(0,0,0,0.0)';

    keyMode = 'Arrows';
}