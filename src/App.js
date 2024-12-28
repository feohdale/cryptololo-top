// cryptololo.top Frontend - React.js with TailwindCSS

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RSS_FEEDS = [
  { url: "https://cointelegraph.com/rss", source: "CoinTelegraph" },
  
  { url: "https://news.bitcoin.com/feed/", source: "Bitcoin News" },
];


// Header Component
const Header = () => (
  <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">cryptololo.top</h1>
      <nav>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/sources" className="px-4">Sources</Link>
      </nav>
    </div>
  </header>
);

// Home Page
const Home = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">Latest Crypto News</h1>
    {RSS_FEEDS.map((feed, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{feed.source}</h2>
        <iframe
          src={feed.url}
          title={feed.source}
          width="100%"
          height="500"
          className="border"
        ></iframe>
      </div>
    ))}
  </div>
);

// Sources Page
const Sources = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">Sources</h1>
    <ul className="list-disc pl-6">
      {RSS_FEEDS.map((feed, index) => (
        <li key={index}>
          <a href={feed.url} target="_blank" rel="noopener noreferrer">{feed.source}</a>
        </li>
      ))}
    </ul>
  </div>
);

// App Component
const App = () => (
  <Router>
    <Header />
    <main className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
    </main>
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        © 2024 cryptololo.top. All rights reserved.
      </div>
    </footer>
  </Router>
);

export default App;
