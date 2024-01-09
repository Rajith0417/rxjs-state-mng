# RxjsStateMng

For this test, you'll need to display a list of plants as well as their details page using the data provided by the API.

## Minimal Conditions

### List page

- Each plant should be displayed as a card.

- The card's content is determined by what the API provides.

- The list must show rows of 5 cards in the desktop breakpoint (window of 1025px and up), 2 cards for the tablet breakpoint (768px to 1024px), and 1 card in the mobile breakpoint (320px to 767px).

- The API is available here: https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev

  - The results shown in the list must be loaded 10 at a time. A `More Results` button allows loading 10 more results, until no more results are available.

  - The API provides paginated results. To access the next set of results, use the value in the `next` key. It's the suffix needed to get the next results.

  - You should only ask for the next 10 results when the user clicks on the `More Results` button.

- Use the `list.png` file as your reference for the visual results.

### Details page

- The details page can be accessed by clicking on the corresponding card in the list page.

- The details' content is determined by what the API provides.

- The page must present the content on 2 columns in the desktop & tablet breakpoints (768px and up), and on a single column in the mobile breakpoint (320px to 767px).

- You can request the details of each plant using the plant id (example: `https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev/1/`)

- A `Back` button allows the user to go back to the list.

- Use the `details.png` file as your reference for the visual results.

The visuals must be produced uniquely by yourself (no visual library allowed). The test need to be coded using the **Angular** framework. Use `Angular CLI` to generate your project.
