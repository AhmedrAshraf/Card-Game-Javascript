var card = document.getElementById('imge'); 
var card1 = document.getElementById('img1'); 
var card2 = document.getElementById('img2');
var card3 = document.getElementById('img3');
var result = document.getElementById('txt');
var para = document.getElementById('para');

function CardChanger(a){

    card1.src = "card"+Math.ceil(Math.random()*3)+".png"; 
    card2.src = "card"+Math.ceil(Math.random()*3)+".png"; 
    card3.src = "card"+Math.ceil(Math.random()*3)+".png"; 

    card1.style.transitionDuration="500ms";
    card1.style.transform=" rotateY(360deg)";
    
    card2.style.transitionDuration="500ms";
    card2.style.transform=" rotateY(360deg)";

    card3.style.transitionDuration="500ms";
    card3.style.transform=" rotateY(360deg)";

        if(card.src === a.src){
            result.innerHTML = "You Won";
            result.style.color="green";
            result.style.backgroundColor="yellow";
            result.style.padding="10px 50px 10px 50px";
            result.style.fontFamily="Arial";
            result.style.fontWeight="bolder";
            result.style.fontSize="25px";
            result.style.display="inline-block";
            result.style.textShadow="1px 1px 1px black"; 
            para.style.margin="20px";
        }
        else{
            result.innerHTML = "You Loss";
            result.style.color="Red";
            result.style.fontFamily="Arial";
            result.style.fontWeight="bolder";
            result.style.fontSize="25px";
            result.style.backgroundColor="yellow";
            result.style.padding="10px 50px 10px 50px";
            result.style.display="inline-block";
            result.style.textShadow="1px 1px 1px black";
            para.style.margin="20px";

        }
    
        setTimeout(function(){
            card1.src = "im.jpg";
            card2.src = "im.jpg";
            card3.src = "im.jpg";
            result.innerHTML = "";
            result.style.color="";
            result.style.backgroundColor="";
            result.style.padding="";
            result.style.display="";
            result.style.textShadow=""; 

            card1.style.transitionDuration="500ms";
            card1.style.transform="";
        
            card2.style.transitionDuration="500ms";
            card2.style.transform="";
        
            card3.style.transitionDuration="500ms";
            card3.style.transform="";

            para.style.margin="";

        }, 1000);
}