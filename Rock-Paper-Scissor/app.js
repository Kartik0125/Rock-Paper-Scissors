let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");
const genCompChoice=()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg.innerText="Game Draw!! Play Again";
    msg.style.backgroundColor="#081b31";
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin)
        {
            user_score++;
            userScore.innerText=user_score;
            msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
    else
        {
            comp_score++;
            compScore.innerText=comp_score;
            msg.innerText=`You Lose!! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
}
const playGame = (userChoice)=>{
    //generate computer choice
    let compChoice=genCompChoice();
    if(userChoice === compChoice)
        {
            //Draw game
            drawGame();
        }
    else
        {
            let userWin=true;
            if(userChoice === "rock")
                {
                    userWin = compChoice === "paper"?false:true;
                }
            else if(userChoice === "paper")
                {
                    userWin =  compChoice === "scissors"?false:true;
                }
            else
                {
                    userWin = compChoice === "rock"?false:true;
                }
            showWinner(userWin,userChoice,compChoice);
        }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})