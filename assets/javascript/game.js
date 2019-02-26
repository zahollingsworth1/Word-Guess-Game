// create an array of words
var words = ["whale", "lion", "turkey", "panther", "bird", "bear", "monkey", "horse", "tiger", "dog", "wolf"]

var imagesArray = ["animal12done.jpg", "assets/images/bear.jpg", "assets/images/koala.jpg", "assets/images/pupper.jpg", "assets/images/aminals1.jpg", "assets/images/animalppic.jpg", "assets/images/animalppic1.jpg", "assets/images/animalppic2.jpg", "assets/images/animalppic3.jpg", "assets/images/hamster.jpg"]



/* ... more images ... */


console.log("hello WOrld")

//choose word randomly

var randNum = Math.floor(Math.random() * words.length);
var chossenWord = words[randNum];

var underscores = [];
var rightword = [];
var wrongword = [];
console.log(chossenWord);
var counter = 10
var x = new Audio('assets/images/Ta Da-SoundBible.com-1884170640.mp3');
var wins = 0
var loses = 0


//Dom Manipulations

var docUnderscore = document.getElementsByClassName ("underscores");
var docrightguess = document.getElementsByClassName ("rightguess");
var docwrongguess = document.getElementsByClassName ("wrongguess");
var doccountdown = document.getElementsByClassName ("countdown");
var docloses = document.getElementsByClassName ("loses");
var docwins = document.getElementsByClassName ("wins");



//underscores on word

var generateUnderscores = function() {
    for(var i=0; i < chossenWord.length; i++){
        underscores.push("_");       
    }
    return underscores;
}
console.log(generateUnderscores());

docUnderscore[0].innerHTML = underscores.join(" ");

//reset

function initialize(){

    function empty() {
        //empty your arrays
        underscores.length = 0;
        rightword.length = 0;
        wrongword.length = 0;
        docrightguess[0].innerHTML = (" ");
        docwrongguess[0].innerHTML = (" ");
        doccountdown[0].innerHTML = (" ");
        counter = 10
        doccountdown[0].innerHTML = 10;

        function displayImage(){

            
            var num = Math.floor(Math.random() * imagesArray.length); 
           
            document.canvas.src = imagesArray[num];
        
        }
        displayImage()
    }
    empty();
    
    randNum = Math.floor(Math.random() * words.length);
        chossenWord = words[randNum];

    var generateUnderscores = function() {
        for(var i=0; i < chossenWord.length; i++){
            underscores.push("_");       
        }
        return underscores;
    }
    console.log(generateUnderscores());
    docUnderscore[0].innerHTML = underscores.join(" ");
}


//get the guess

document.addEventListener ("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    console.log(keyWord);

//is it right     

    if(chossenWord.indexOf(keyWord) > -1){
        rightword.push(keyWord);
        
 // replace underscore with letter      
        
        underscores[chossenWord.indexOf(keyWord)] = keyWord;
        console.log(underscores);

        docUnderscore[0].innerHTML = underscores.join(" ");

        docrightguess[0].innerHTML = rightword.join(" ");
        
        if(underscores.join("") == chossenWord){
            x.play()
            alert("You Win!!"); 
            wins = wins + 1;
                docwins[0].innerHTML = wins;
                return wins;           
        }       
     }
    if (chossenWord.indexOf(keyWord) === -1){
        wrongword.push(keyWord);
        docwrongguess[0].innerHTML = wrongword.join(" ");
        console.log(wrongword);
        if(counter === 1){
            alert("You Lose:(     The answer was " + chossenWord)
            initialize()
            counter = counter + 1;
                loses = loses + 1;
                docloses[0].innerHTML = loses;
                return loses;
            }; 
        counter = counter - 1;
           console.log(counter)
           doccountdown[0].innerHTML = counter;
           return counter;                              
    }        
});

document.getElementById('reset').onclick = function() {
    initialize()
}







