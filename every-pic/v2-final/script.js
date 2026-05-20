(function(){
    "use strict";
    console.log("reading js");

    const frame1 = document.querySelector(".frame1")
    const btn1 = document.querySelector(".frame1 .button")

    const shelf = document.querySelector(".frame2")


    const collegeOverlay = document.querySelector(".collegePark")
    const heartCollege = document.querySelector(".collegePark .heart")
    const leftSqrCollege = document.querySelector(".collegePark .leftSquare")
    const middleSqrCollege = document.querySelector(".collegePark .middleSquare")
    const rightSqrCollege = document.querySelector(".collegePark .rightSquare")
    const buttonCollege = document.querySelector(".collegePark .button")

    const mabelsOverlay = document.querySelector(".mabelsMarket")
    const heartMabels = document.querySelector(".mabelsMarket .heart")
    const leftSqrMabels = document.querySelector(".mabelsMarket .leftSquare")
    const middleSqrMabels = document.querySelector(".mabelsMarket .middleSquare")
    const rightSqrMabels = document.querySelector(".mabelsMarket .rightSquare")
    const buttonMabels = document.querySelector(".mabelsMarket .button")

    const arbOverlay = document.querySelector(".arboretum")
    const heartArb = document.querySelector(".arboretum .heart")
    const leftSqrArb = document.querySelector(".arboretum .leftSquare")
    const middleSqrArb = document.querySelector(".arboretum .middleSquare")
    const rightSqrArb = document.querySelector(".arboretum .rightSquare")
    const buttonArb = document.querySelector(".arboretum .button")

    const varsityOverlay = document.querySelector(".varsity")
    const heartVarsity = document.querySelector(".varsity .heart")
    const leftSqrVarsity = document.querySelector(".varsity .leftSquare")
    const middleSqrVarsity = document.querySelector(".varsity .middleSquare")
    const rightSqrVarsity = document.querySelector(".varsity .rightSquare")
    const buttonVarsity = document.querySelector(".varsity .button")

    const templeOverlay = document.querySelector(".temple")
    const heartTemple = document.querySelector(".temple .heart")
    const leftSqrTemple = document.querySelector(".temple .leftSquare")
    const middleSqrTemple = document.querySelector(".temple .middleSquare")
    const rightSqrTemple = document.querySelector(".temple .rightSquare")
    const buttonTemple = document.querySelector(".temple .button")

    const mercadoOverlay = document.querySelector(".mercado")
    const heartMercado = document.querySelector(".mercado .heart")
    const leftSqrMercado = document.querySelector(".mercado .leftSquare")
    const middleSqrMercado = document.querySelector(".mercado .middleSquare")
    const rightSqrMercado = document.querySelector(".mercado .rightSquare")
    const buttonMercado = document.querySelector(".mercado .button")

    btn1.addEventListener("click",function(){
        frame1.style.display ="none";
        shelf.style.display="block";
    })

// arb
   document.querySelector('#rect1').addEventListener('click', function(){
        console.log('over rect1');
        shelf.style.display="none";
        arbOverlay.style.display="flex";

    });

// varsity
    document.querySelector('#rect2').addEventListener('click', function(){
        console.log('over rect2');
        shelf.style.display="none";
        varsityOverlay.style.display="flex";
    });

    document.querySelector('#rect3').addEventListener('click', function(){
        console.log('over rect3');
        shelf.style.display="none";
        collegeOverlay.style.display="flex";
    });

   document.querySelector('#rect4').addEventListener('click', function(){
        console.log('over rect4');
        shelf.style.display="none";
        templeOverlay.style.display="flex";
    });

    document.querySelector('#rect5').addEventListener('click', function(){
        console.log('over rect5');
        shelf.style.display="none";
        mabelsOverlay.style.display="flex";
    });

    document.querySelector('#rect6').addEventListener('click', function(){
        console.log('over rect6');
        shelf.style.display="none";
        mercadoOverlay.style.display="flex";
    });

    heartCollege.addEventListener("click",function(){
        leftSqrCollege.style.scale= "100%";
        leftSqrCollege.style.opacity="1";
        middleSqrCollege.style.scale="100%";
        middleSqrCollege.style.opacity="1";
        rightSqrCollege.style.scale="100%";
        rightSqrCollege.style.opacity="1";
    });

    heartCollege.addEventListener("mouseleave", function() {
        leftSqrCollege.style.scale = "0%";
        leftSqrCollege.style.opacity = "0";
        middleSqrCollege.style.scale = "0%";
        middleSqrCollege.style.opacity = "0";
        rightSqrCollege.style.scale = "0%";
        rightSqrCollege.style.opacity = "0";
    });

    buttonCollege.addEventListener("click",function(){
        collegeOverlay.style.display ="none";
        shelf.style.display="block";

    });


    heartMabels.addEventListener("click", function(){
        leftSqrMabels.style.scale= "100%";
        leftSqrMabels.style.opacity="1";
        middleSqrMabels.style.scale="100%";
        middleSqrMabels.style.opacity="1";
        rightSqrMabels.style.scale="100%";
        rightSqrMabels.style.opacity="1";
    });

    heartMabels.addEventListener("mouseleave", function() {
        leftSqrMabels.style.scale = "0%";
        leftSqrMabels.style.opacity = "0";
        middleSqrMabels.style.scale = "0%";
        middleSqrMabels.style.opacity = "0";
        rightSqrMabels.style.scale = "0%";
        rightSqrMabels.style.opacity = "0";
    });

    buttonMabels.addEventListener("click",function(){
        mabelsOverlay.style.display ="none";
        shelf.style.display="block";

    });



    heartVarsity.addEventListener("click", function(){
        leftSqrVarsity.style.scale= "100%";
        leftSqrVarsity.style.opacity="1";
        middleSqrVarsity.style.scale="100%";
        middleSqrVarsity.style.opacity="1";
        rightSqrVarsity.style.scale="100%";
        rightSqrVarsity.style.opacity="1";
    });

    heartVarsity.addEventListener("mouseleave", function() {
        leftSqrVarsity.style.scale = "0%";
        leftSqrVarsity.style.opacity = "0";
        middleSqrVarsity.style.scale = "0%";
        middleSqrVarsity.style.opacity = "0";
        rightSqrVarsity.style.scale = "0%";
        rightSqrVarsity.style.opacity = "0";
    });

    buttonVarsity.addEventListener("click",function(){
        varsityOverlay.style.display ="none";
        shelf.style.display="block";

    });



    heartTemple.addEventListener("click", function(){
        leftSqrTemple.style.scale= "100%";
        leftSqrTemple.style.opacity="1";
        middleSqrTemple.style.scale="100%";
        middleSqrTemple.style.opacity="1";
        rightSqrTemple.style.scale="100%";
        rightSqrTemple.style.opacity="1";
    });

    heartTemple.addEventListener("mouseleave", function() {
        leftSqrTemple.style.scale = "0%";
        leftSqrTemple.style.opacity = "0";
        middleSqrTemple.style.scale = "0%";
        middleSqrTemple.style.opacity = "0";
        rightSqrTemple.style.scale = "0%";
        rightSqrTemple.style.opacity = "0";
    });

    buttonTemple.addEventListener("click",function(){
        templeOverlay.style.display ="none";
        shelf.style.display="block";

    });


    heartMercado.addEventListener("click", function(){
        leftSqrMercado.style.scale= "100%";
        leftSqrMercado.style.opacity="1";
        middleSqrMercado.style.scale="100%";
        middleSqrMercado.style.opacity="1";
        rightSqrMercado.style.scale="100%";
        rightSqrMercado.style.opacity="1";
    });
    heartMercado.addEventListener("mouseleave", function() {
        leftSqrMercado.style.scale = "0%";
        leftSqrMercado.style.opacity = "0";
        middleSqrMercado.style.scale = "0%";
        middleSqrMercado.style.opacity = "0";
        rightSqrMercado.style.scale = "0%";
        rightSqrMercado.style.opacity = "0";
    });

    buttonMercado.addEventListener("click",function(){
        mercadoOverlay.style.display ="none";
        shelf.style.display="block";

    });

    heartArb.addEventListener("click", function(){
        leftSqrArb.style.scale= "100%";
        leftSqrArb.style.opacity="1";
        middleSqrArb.style.scale="100%";
        middleSqrArb.style.opacity="1";
        rightSqrArb.style.scale="100%";
        rightSqrArb.style.opacity="1";
    });

    heartArb.addEventListener("mouseleave", function() {
        leftSqrArb.style.scale = "0%";
        leftSqrArb.style.opacity = "0";
        middleSqrArb.style.scale = "0%";
        middleSqrArb.style.opacity = "0";
        rightSqrArb.style.scale = "0%";
        rightSqrArb.style.opacity = "0";
    });

    buttonArb.addEventListener("click",function(){
        arbOverlay.style.display ="none";
        shelf.style.display="block";

    });
})();