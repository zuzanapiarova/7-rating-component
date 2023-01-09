
const stars = document.querySelectorAll('.rating'); // uerySelectorALL first scans entire element and then indexes the first found and so on, behavior is identical to querySelector but this one finds element indexes it and goes onto other elements - queryselector is more efficient


//we want to loop through the stars and get the star element and its index
stars.forEach((currentStar, currentIndex) => {   //currentStar, currentIndex are chosen names - for each STAR in stars, for each INDEX of star in stars
  
    //  logic for elements before our selected element to be highlighted
    currentStar.addEventListener('mouseover', () => {
        stars.forEach((previousStar, previousStarIndex) => {
            if(previousStarIndex <= currentIndex) {
            previousStar.classList.add('highlighted')
            }
        });
    })

    currentStar.addEventListener('mouseout', () => {
        stars.forEach((previousStar) => {
            if(previousStar.classList.contains('highlighted')) {
            previousStar.classList.remove('highlighted')
            }
        });
    })

    currentStar.addEventListener('click', () => {
        console.log(`star with index of ${currentIndex+1} was clicked`);
        stars.forEach((previousStar, previousStarIndex) => {
            if(previousStarIndex <= currentIndex)
            {previousStar.classList.add('chosen')}
        })

        stars.forEach((followingStar, followingStarIndex) => {
            if(followingStarIndex > currentIndex && followingStar.classList.contains('chosen'))
            {followingStar.classList.remove('chosen')}
        })
        
    });

})
  