# Instructions  

In this project, you'll use what you've learned about web design to style an article page.

[This article](https://blog.opensource.org/helping-open-source-projects-thrive-by-putting-essential-licensing-data-at-teams-fingertips/) is from the OpenSource.org blog, and it's about a tool that helps teams learn about the licenses for their open source software.

You're going to help style the article like it's styled on the original blog (we've modified the html and styles a little bit, to make it simpler.)

## Project Goal

Your goal is to make the site look like these images:

**Header:**

![goal header](/images/header.png)

**Footer:**

![goal footer](/images/footer.png)

## Starter Code

The project starts with a plain HTML file in index.html. It links to two css files: `definitions.css` and `style.css`. 

`definitions.css` loads the fonts you will need and creates variables for the colors you will use.

You will write your styles in `style.css`. It starts off mostly empty, but you will fill it in as you go.

### Tips

Most of the challenge will be using the right CSS selector to apply the styles to the right elements.

* You may go back and review [CSS Diner](https://flukeout.github.io/) to practice your selectors again
* Open the page in a separate window and use the Devtools to find the elements to style. They often have a tag name or classname you can use to select them.
* Run your code frequently to see that your styles are applied to the correct elements.

## Steps

Go piece by piece, adding the styles to match the images. Follow the steps below for guidance.

### Styling the header

First, style the header.

* The whole header should have
  * 24px of padding
  * font-size of 1.125rem
* links in the header should have no text decoration.
* links in the header should use the nav color.
* The title should be:
  * uppercase
  * bold font-weight
  * left margin of 1rem
* The links inside the .nav-links span should be
  * 10px of margin apart from each other
  * underlined on hover

To get the spacing right, we'll apply some box-model tricks:

The title and the nav links both get:
```css
vertical-align: top;
display: inline-block;
padding-top: 1rem;
```

And to push the .nav-links to the right side of the page:
```css
margin-left: 55%;
```

Check that the header matches the picture.

### Styling the main article

First, style the info block with the date, author's name, and category.

* spans inside the info block should use
  * the info color
  * 15px of right margin
  * In order to get margin to work, they'll need `display: inline-block`

* anchor tags inside the info block should use
  * the accent color
  * no text decoration

Next, style the heading:
* The font stack used for headings is `font-family "Libre Baskerville", serif;`
* The font size is 2.625rem
* The font weight is 300
* Use 10px for the top margin

Then, style article text in `main`:
* font size 1.125rem for paragraphs
* line height 1.6 for paragraphs
* links should use the accent color

Finally, add the spacing to the `main` element. It should get:
* 15px of padding, so that the text isn't right against the edge on small screens
* A max-width of 620px so that the lines aren't too long
* margin: auto, so that the article is centered

**Check** that your site now matches the first image.

### Styling the footer

Last but not least, style the footer.

The first thing to notice about the footer is the colors. They're inverted from the rest of the page. Apply the footer-background-color and footer-text-color variables to the whole footer element. 

Add 3rem of padding, to give the contents of the footer some breathing room.

The h4 within the footer should use:
* The font stack: `font-family: "Libre Baskerville", serif;`
* The accent color
* 1.25rem point size
* And be aligned in the center, using `text-align: center`

The paragraph of text within the footer should have a max-width of 500px, and be centered using `margin: auto`.

Next are the list of links in the footer.
* The list items should have the dots removed using `list-style: none`, and should have 5px of top padding.
* The links should use the footer text color. They should have no text decoration normally, but they should be underlined when hovered.
* The `ul` should have zero padding, width of 500px, and `margin: 20px auto`, so that it's centered and has space above it.

Finally, the social icons. They're hard to see at first, because the color is dark on a dark background.
* To change the color of the images, give the `.social-icons` class the property `fill: var(--footer-text-color)`.
* The icons should also be aligned in the center using `text-align: center`.

## You're finished!

Once again, check that your site looks like the target images. Once your styling is complete, you are finished! You can test your work by running the tests with `pnpm run test`.

Don't forget to submit your work.

## Content Note

This article is from the OpenSource.org blog. You can view the original here: [Helping open source projects thrive](https://blog.opensource.org/helping-open-source-projects-thrive-by-putting-essential-licensing-data-at-teams-fingertips/)
