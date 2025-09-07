This is a simple React-based news website. The project fetches and displays news articles in a responsive grid layout using Zustand for state management.

## Features

- **Fetches news articles** from a global store using Zustand.
- **Displays articles** in a responsive grid using the `NewsCard` component.
- **Loading state** shown while articles are being fetched.
- **Email input field** for future newsletter or subscription features.

## Project Structure

news-website/ ├── public/ 
│ └── index.html
 ├── src/ │ 
 ├── components/ │
  │ ├── Hero.jsx │ 
  │ ├── NewsCard.jsx │ 
  │ └── NewsStore.js │
   ├── App.jsx │ 
   ├── index.js │ 
   └── styles/ │
    └── index.css 
    ├── package.json 
    └── README.md



## Main Components

- **Hero.jsx**  
  Fetches news articles and displays them in a grid. Uses `useNewsStore` for state and `NewsCard` for rendering each article.

- **NewsCard.jsx**  
  Renders individual news article details (not shown here).

- **NewsStore.js**  
  Zustand store for managing and fetching news articles (not shown here).

## Usage

1. Clone the repository.
2. Install dependencies:
