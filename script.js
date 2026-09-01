let btns = document.querySelectorAll(".choice");
let arr = ["rock" , "paper" , "scissor"]
let user = 0
let computer = 0
let resetbtn = document.querySelector("#reset_button")


btns.forEach((btn) => {
    btn.addEventListener('click' , (event) =>{
        let message = document.querySelector("p").textContent
        let you = event.target.value;
        let compt = arr[Math.floor(Math.random()*arr.length)]
        

        if(you=="rock" && compt =="scissor"){
            console.log(`you win computer choice is ${compt}`);
            user+=1;
            message =`you win computer choice is ${compt}`

        }
        else if (you=="rock" && compt =="rock"){
            console.log("Match Tie");
            message = `Match Tie`
            
        }
        else if (you=="rock" && compt =="paper"){
            console.log(`you lose computer choice is ${compt}`);
            computer+=1;
            message = `you lose computer choice is ${compt}`
        }
        else if (you=="paper" && compt =="scissor"){
            console.log(`you lose computer choice is ${compt}`);
            computer+=1;
            message = `you lose computer choice is ${compt}`
        }
        else if (you=="paper" && compt =="rock"){
            console.log(`you win computer choice is ${compt}`);
            user+=1;
            message = `you win computer choice is ${compt}`
        }
        else if (you=="paper" && compt =="paper"){
            console.log(`match is tie computer choice is ${compt}`);
            message = `match is tie computer choice is ${compt}`
        }
        else if (you=="scissor" && compt =="scissor"){
            console.log(`match is tie computer choice is ${compt}`);
            message = `match is tie computer choice is ${compt}`
        }
        else if (you=="scissor" && compt =="paper"){
            console.log(`you win computer choice is ${compt}`);
            user+=1;
            message = `you win computer choice is ${compt}`
        }
        else if (you=="scissor" && compt =="rock"){
            console.log(`you lose computer choice is ${compt}`);
            computer+=1;
            message = `you lose computer choice is ${compt}`;
        };
        
        
        });
});