import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

function App() {
  
  const [progress, setProgress] = useState(0);

  // Reset the progress bar after it reaches 100
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setProgress(0), 500); // Optional reset logic
    }
  }, [progress]);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} category="general" country="us" key="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} category="business" country="us" key="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} category="entertainment" country="us" key="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} category="health" country="us" key="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} category="science" country="us" key="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} category="sports" country="us" key="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} category="technology" country="us" key="technology" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Default route for unknown pages */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
