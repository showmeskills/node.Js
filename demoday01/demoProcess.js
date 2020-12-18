// this is a little game to test process;
let player = process.argv[2];//because process.argv is feedback an array within file route and direction route;

if(player === 'rock' || player === 'paper' || player === 'scissors'){
    let computer ='';
    let random = Math.random()*3;

    if(random < 1){
        computer = 'scissors';
        console.log('computer is scissors')
    }else if(random > 2){
        computer = 'paper';
        console.log('computer is paper')
    }else{
        computer = 'rock';
        console.log('computer is rock')
    }
    if(player === computer){
        console.log('the game is tied')
    }else if(
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ){
        console.log('player Win')
    }else{
        console.log('computer win')
    }
}else{
    console.log('player try to be a foul')
}