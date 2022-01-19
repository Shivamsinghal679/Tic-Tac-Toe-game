console.log("...Welcome to the project...")
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let go=false;
let ch=0;
let turn='X';
const changeturn = () => {
    return turn === "X"?"0":"X"
}
const checkWin= () => {

        let boxtext = document.getElementsByClassName('boxtext');
        let win =[
            [0, 1, 2 , 5, 5,  0],
            [3,4 ,5 ,5 ,15 , 0],
            [ 6, 7, 8, 5, 25, 0],
            [0 ,3 ,6 ,-5 ,15 ,90],
            [1, 4, 7, 5, 15, 90],
            [2 , 5, 8, 15, 15, 90],
            [0, 4, 8, 5 , 15 , 45],
            [2, 4, 6, 5 , 15 , 135],
        ];
        win.forEach(e=>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[2]].innerText !== "") ){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText +" WON "
                go= true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
                gameover.play();
            }
        })
}
//music.play();
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
        boxtext.innerText = turn;
        turn = changeturn();
        ting.play();
        checkWin();
        if(!go){
        document.getElementsByClassName("info")[0].innerText =  "turn for "+ turn;
        ch=ch+1
        if(ch === 9){
            document.getElementsByClassName("info")[0].innerText =  " GAME IS TIE CLICK RESET TO PLAY AGAIN";
            gameover.play();   
        }
        }
        }
    })
});

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=""
    })
    turn="X"
    go=false
    ch=0;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText =  "turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})
