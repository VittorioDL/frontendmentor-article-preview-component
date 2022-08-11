// ---------------------codewithsadee SOLUTION--------------------------

var shareOption = document.querySelector(".share-option");
var shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", function(){
    this.classList.toggle("active");
    shareOption.classList.toggle("active");
})

// MY OLD INCOMPLETE SOLUTION THAT DOESN'T WORK PROPERLY
// // CHANGE SHARE ICON WHEN HOVER
// const shareIcon = document.querySelector(".share-icon");
// const shareIconContainer = document.querySelector(".share-icon-container");
// const sharePopUpMobile = document.querySelector(".share-box-mobile");
// const sharePopUpDesktop = document.querySelector(".share-box-desktop");
// const avatarContainer = document.querySelector(".avatar-container");

// // SHOW SHARE DIV WHEN CLICK
// shareIconContainer.addEventListener("click", changeShareDiv);
// var clicked = false;

// function changeShareDiv(){
//     if(!clicked){
//         clicked = true;
//         //MOBILE POPUP
//         if(window.innerWidth < 750){
//             sharePopUpMobile.style.display = "flex";
//             sharePopUpMobile.style.flexDirection = "row";

//             sharePopUpDesktop.style.display = "none";
//             avatarContainer.style.display = "none";
//         }
//         //DESKTOP POPUP
//         else{ 
//             sharePopUpDesktop.style.display = "flex";
//             sharePopUpDesktop.style.flexDirection = "row";

//             sharePopUpMobile.style.display = "none";
//             avatarContainer.style.display = "none";
//         }
        
//         // CHANGE SHARE ICON COLORS
//         shareIconContainer.style.backgroundColor = "var(--desaturated-dark-blue)";
//         shareIcon.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(131deg) brightness(102%) contrast(103%)";
//     }
//     else{
//         clicked = false;
//         sharePopUpMobile.style.display = "none";
//         sharePopUpDesktop.style.display = "none";
//         avatarContainer.style.display = "flex";

//         // CHANGE SHARE ICON COLOR TO NORMAL
//         shareIconContainer.style.backgroundColor = "var(--light-grayish-blue)";
//         shareIcon.style.filter = "brightness(0) saturate(100%) invert(49%) sepia(7%) saturate(1277%) hue-rotate(175deg) brightness(97%) contrast(90%)";
//     }
    
// }
