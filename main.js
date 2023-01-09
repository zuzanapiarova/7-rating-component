
const stars = document.querySelectorAll('.rating'); // uerySelectorALL first scans entire element and then indexes the first found and so on, behavior is identical to querySelector but this one finds element indexes it and goes onto other elements - queryselector is more efficient
const submitButton = document.getElementById('submit');
const thankYouPage = document.getElementById('thank');
let chosenRating = '';

//we want to loop through the stars and get the star element and its index
stars.forEach((currentStar, currentIndex) => {   //currentStar, currentIndex are chosen names - for each STAR in stars, for each INDEX of star in stars
    //  logic for elements before our selected element to be highlighted when the element is hovered over

    currentStar.addEventListener('mouseover', () => {
        stars.forEach((previousStar, previousStarIndex) => {
            if(previousStarIndex <= currentIndex) {
            previousStar.classList.add('highlighted-hover')
            }
        });
    })

    currentStar.addEventListener('mouseout', () => {
        stars.forEach((previousStar) => {
            if(previousStar.classList.contains('highlighted-hover')) {
            previousStar.classList.remove('highlighted-hover')
            }
        });
    })

    //  logic for elements before our selected element to be marked orange when the element is clicked
    //logic for the chosen rating to be saved into a varible for further use

    currentStar.addEventListener('click', () => {
        //console.log(`star with index of ${currentIndex+1} was clicked`);
        chosenRating = (currentIndex+1); 
        stars.forEach((previousStar, previousStarIndex) => {
            if(previousStarIndex <= currentIndex)
            {previousStar.classList.add('highlighted-chosen')}
        })

        stars.forEach((followingStar, followingStarIndex) => {
            if(followingStarIndex > currentIndex && followingStar.classList.contains('highlighted-chosen'))
            {followingStar.classList.remove('highlighted-chosen')}
        })
        
    });
})

function submitRating(){    //this is an onClick function for #submit id
    thankYouPage.style.visibility = 'visible';
    document.getElementById('chosenRating').innerHTML = chosenRating;
}



// can add function that shows average rating 
