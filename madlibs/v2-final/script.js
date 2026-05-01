(function(){
    "use strict";
    console.log("reading js");

    const madlibQuestions = document.querySelector("#madlib-questions");
    const madlib = document.querySelector("#madlib");
    const madlibOverlay = document.querySelector('#madlib-overlay');
    const closeBtn = document.querySelector('#close');
    const errorMessage = document.querySelector('#error');


    madlibQuestions.addEventListener("submit", function(event){
        event.preventDefault();

        const place1 = document.querySelector("#place1").value;
        const place2 = document.querySelector("#place2").value;
        const animal = document.querySelector("#animal").value;
        const food1 = document.querySelector("#food1").value;
        const food2 = document.querySelector("#food2").value;
        const food3 = document.querySelector("#food3").value;
        const emotion = document.querySelector("#emotion").value;
        const actionVerb = document.querySelector("#actionVerb").value;

        let myText;

        if(place1 == ""){
            myText ="please provide a place";
            document.querySelector("#place1").focus();
            errorMessage.innerHTML = myText;

        }
        else if(place2 == ""){
            myText ="please provide a second place";
            document.querySelector("#place2").focus();
            errorMessage.innerHTML = myText;

        }
        else if(animal == ""){
            myText ="please provide an animal";
            document.querySelector("#animal").focus();
            errorMessage.innerHTML = myText;

        }
        else if(food1 == ""){
            myText ="please provide a food";
            document.querySelector("#food1").focus();
            errorMessage.innerHTML = myText;

        }
        else if(food2 == ""){
            myText ="please provide a different food";
            document.querySelector("#food2").focus();
            errorMessage.innerHTML = myText;

        }
        else if(food3 == ""){
            myText ="please provide another different food";
            document.querySelector("#food3").focus();
            errorMessage.innerHTML = myText;

        }
        else if(emotion == ""){
            myText ="please provide an emotion";
            document.querySelector("#emotion").focus();
            errorMessage.innerHTML = myText;

        }
        else if(actionVerb == ""){
            myText ="please provide an action verb";
            document.querySelector("#actionVerb").focus();
            errorMessage.innerHTML = myText;

        }else{
            myText= `<h2>Starry's Adventure</h2>
                <p>Starry loves going to the <span>${place1}</span> everyday but one day he went to the <span>${place2}</span>.When he got to the <span>${place2}</span>
                Starry noticed something odd. There was a <span>${animal}</span> having a huge picnic. There was so much food. The <span>${animal}</span> had <span>${food1}</span>, <span>${food2}</span> and, <span>${food3}</span>. Starry’s favorite food was <span>${food2}</span>. Starry came to the <span>${place2}</span> for a short outing but forgot to eat before coming. His stomach was grumbling so loud the <span>${animal}</span> heard. 
                Starry was so embarrassed he was going to run away. Until the <span>${animal}</span> called him over. Starry came closer and the <span>${animal}</span> said “I have so much food but my friend canceled, would you like to join me?” Starru sat down and ate <span>${food1}</span>, <span>${food2}</span> and, <span>${food3}</span> with so much <span>${emotion}</span> . Starry told <span>${animal}</span> I'm going to <span>${actionVerb}</span> here everyday.</p>`;


            document.querySelector("#place1").value="";
            document.querySelector("#place2").value="";
            document.querySelector("#animal").value="";
            document.querySelector("#food1").value="";
            document.querySelector("#food2").value="";
            document.querySelector("#food3").value="";
            document.querySelector("#emotion").value="";
            document.querySelector("#actionVerb").value="";

            madlib.innerHTML = myText
            madlibOverlay.style.display = "block";


        }
   


    });
    
    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        madlibOverlay.style.display = "none";

    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            madlibOverlay.style.display = "none";


        }
    });


})();