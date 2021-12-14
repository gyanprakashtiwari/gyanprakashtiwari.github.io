var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// console.log(navMenuAnchorTags);
for(var i=0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
       
        var interval = setInterval(function(){
            var targetSecionCoordinates = targetSection.getBoundingClientRect();
            if(targetSecionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },10);
        // console.log(targetSectionID);       
    });
}

// For auto fill skills level when visible
var animationDone = false;
var progressBars = document.querySelectorAll('.skill-progress > div');;
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    // progressBars.style.width = 0 + 'data-bar-width';

    for(let bar of progressBars){
        let  targetWidth = bar.getAttribute('data-bar-width');
        let   currWidth = 0;
        let interval = setInterval(function(){
            if(currWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + '%';

        },5);
    }
}

function checkScroll(){
    var coordinates =  skillsContainer.getBoundingClientRect();
    
    if(!animationDone &&  coordinates.top < window.innerHeight){
        animationDone = true;
        // console.log('skill vissible')
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}