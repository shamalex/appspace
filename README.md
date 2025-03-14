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
