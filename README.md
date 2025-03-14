## Rick and Morty Characters App for AppSpace Tech Challenge

## How to run it

```bash
yarn
yarn dev
```

## 🚀 Deployment

This project is deployed on Vercel. You can see it live [https://appspace-theta.vercel.app/](https://appspace-theta.vercel.app/)

## What’s inside?

### Listing Page:

- Shows a list of characters with their name and image.
- You can search by name.
- Using debounce to avoid making too many requests.
- Filter by status (Alive, Dead, Unknown).
- Filter by Gender (Male, Female, Unknown).
- Sort alphabetically.
- Reset button to clear the search and filter.
- Click on a character to see more details.
- Shows a loading spinner while fetching data.
- Fetches data from url query params.
- Added pagination to show 20 characters per page.
- Responsive design.
- Shows a message when there are no characters to show.
- Collapsible filter section on mobile for better user experience.
- Footer sticky to the bottom of the page.
- Update title when route changes.

### Details Page:

- Click on a character to see more info like their status, species

## Tech Stack

- React (with TypeScript)
- CSS Modules
- Rick and Morty public API
- Vercel


## Answers to the additional questions

1. Custom Hooks in React
In my code you can find, for instance, the useDebounce custom hook. basically it's a simple function that delays execution. I used it in the search bar to avoid making to many requests when you typing and this is a cool example of how custom hooks can be useful.

2. TypeScript in Frontend
if in short, it helps to prevent errors by checking types. I used it in this test task as well for Characters and filters. it safer and easier to maintain. no surprises when you expect a string but get a number. and for other hand, it takes time to add it to an existing project due to some libraries may not fully support it. but in the end, it's worth it.

3. Testing in Frontend
Both my hands are up for testing. I'm using Jest and React Testing Library for unit and integration tests and Playwright for E2E tests to simulate users actions. ANd its helpful when we create a PR, then we trigger the tests and we can see if the tests are passing or not before creating the preview link. so its must have for me.

4. Managing a Distributed Team
i have an experience of working day to day with a distributed team and we are using tools like Jira and Discord. The main point that I want to highlight here is the best way for me is to write and read a clear questions and answers, to avoid misunderstandings. And also will be great to find 10-15 mins for team to make a daily standup to keep everyone in line.

5. Handling a Bad Technical Suggestion
great question. nothing bad here I think, in this case I would ask for more details and try to understand the suggestion better.then I will try to ask some additional question regarding the scalability or adding some dynamic features to this suggestion. and usually after that I'm getting a messages like this "yeah, I added some adjustments and improvements, lets double-check it again" and we are getting a better solution together.
