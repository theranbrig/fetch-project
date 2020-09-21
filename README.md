# Theran Brigowatz Fetch Project

## About Project

This project was built using Create React App and Tailwind.css. I normally would build out a site with Next.js or Gatsby, but for such a simple app, I just used the standard Create React App to get up and running quickly. I used Tailwind as it provides a great framework for styling and is quick to setup.

Other than that it is all regular React and JavaScript. I just used the standard Fetch API, rather than a library like Axios as there was nothing too complex in this case. State was just handled by `useState`, though for more complex projects I would reach for something like Redux or the Context API.

### Notes

- **_CORS_** - The settings for the API path that was sent was blocked by CORS on `localhost`. Since I did not have access to change the server cors permissions I recreated the JSON file as a `localhost` API route. This should simulate making the Fetch API call like in the directions, rather than doing a direct import.
- **_Filtering and Sorting_** - This was not an issue, as much as an architecture decision. In order to sort and filter the data, the `getListData` function grew quickly. Originally I had two states, one for the list ids and one for the filtered items. Then in the render I was filtering out by id.

  However, I decided to refactor, so all filtering and sorting methods finish before the render, as not end up with render errors from unpopulated data. This is a bit more complex with multiple chained array methods to sort and filter items, but I think that if the data model were to scale, this would be more efficient and grow with a more dynamic data model.

  This is also where I ran into an issue of sorting. The directions said to sort by name. I originally did have this by the string, but then they are out of numerical order if you sort by string. You can use this to just sort alphabetically by name:

  ```js
  list.sort((a, b) => a.name(localeCompare(b.name)));
  ```

  But I ran into the issue that even though they are in string order, the numbers are out of order. To make more sense to the user, I decided to go with a clear numeric order. If the numbers in the items did not match their id, I would have probably gone with:

  ```js
  list.sort((a, b) => ParseInt(a.slice(4)) - ParseInt(b.slice(4)));
  ```

  This would have ensured they were in alphabetical order by name. However, I did just use ids as the id and the name contained the same number. This is a liberty I took, since the directions were unclear if they should be sorted by the full name order, or the numeric order contained in the name.

- **_Styling and Accessibility_** - Using Tailwind.CSS I tried to dynamically render the color palette. This does work, but from an a11y point of view, I would adjust it to have a larger custom color pallette to work with, or custom colors that fit better. The default pattern does not have a wide enough range for this time of dynamic CSS and this many items. This is especially true on List 2 and list 3. There should be greater contrast between background and font colors on the items to make it more readable.

  The site is fully mobile responsive and goes to a column view for lists on mobile and tablet views. It used grid for the overall layout, with flex box in the list. I realize that this isn't a world changing design, as I am not a designer, but it works ok in this case.

- **_State Management_** - No external libraries were used for state, as there really is only the one data set that is in state. There are simple loading and error states to make the UX a bit more smooth, but the displays are very basic.

### Installation

Install with `npm install` or `yarn install`.

After installation you may use `npm start` or `yarn start`. The site will run on `http://localhost:3000`.
