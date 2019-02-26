var docUnderscore = document.getElementsByClassName ("underscores");
docUnderscore[0].innerHTML = generateUnderscores().join(" ");
if(counter === 0){
    alert("You Lose")
    }; 


    function displayImage(){

            
        var num = Math.floor(Math.random() * imagesArray.length); 
       
        document.canvas.src = imagesArray[num];
    
    }
    displayImage()