# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

### The challenge

Users should be able to:
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

- Solution URL: https://github.com/zuzanapiarova/7-rating-component
- Live Site URL: https://zuzanapiarova.github.io/7-rating-component/

## My solution, process and what I learned
I improved my skills in HTML, CSS and practiced new concept of manipulating components' visibility with JS.
In Javascript I came on a couple hard challenges, that were not needed in solution but I wanted my component to have this functionality so I could refer back to it in my future projects:
1. how to make all previous stars before our selected stars be highlighted as well
2. how to make possible to change the selected rating before hitting submit
3. how to save the selected rating and show it in another component  (this was a requirement) - after I figured this out it was really simple solution

I am very proud of my javascript code in this project as this was my first project that I handled almost without searching help 

one challange in CSS was that I had to look up ways how to make a div a square at all times and all screens - both the .container and a .rating element that must be circle at all times - I found this can be done in 2 ways - 
1. set the height and width both in units of vw/vh (height: 30vw, width: 30vw)
2. for the circle I did set width how I wanted, and then the secret is to add a .rating::after and set its padding-bottom (play around with the margin because sometimes it works at 100% and sometimes at the percentage we set the width at):
  .rating{
    width: 15%;
  }

  .rating::after{
      content: '';
      display: block;
      padding-bottom: 100%;
  }


I am proud of : 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript