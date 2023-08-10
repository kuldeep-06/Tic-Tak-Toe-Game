console.log('Welcome to Tic Tak Toe')
let over = new Audio("gameOver.mp3");
let tap = new Audio("tap.mp3");
let turn = "X";
let gameOver=false;

// Player 1 starts first, so it's set as "X"
const changeTurn =()=>{
    return turn==="X"?"0":"X";
}

//fumction to check win 
 const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [2,4,6]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px";
            // over.play()
        }
    })
 }

 //game logic
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
           tap.play(1)
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
 })


 reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText='';
    })
    turn="X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
 })