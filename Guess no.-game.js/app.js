const max=prompt("Enter the range up to which you want to play");
const random=(Math.floor(Math.random()*max+1));
console.log(random)
let guess=prompt("guess the random no. randomd :) ")
while(true)
{
    if(guess=="quit") 
    {
       console.log("you quit the game!!!");
       break;
    }

    if (guess==random) {
        console.log(`Congratulation you were genious! value is:- ${random}` );
        break;
    }

 
       else if (guess>random) {
            guess=prompt("hint:you enter large number please try to enter small no.");
        }


        else {
            guess=prompt("hint:you enter small number please try to enter large no.");
        }
        
}





