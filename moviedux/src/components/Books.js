import React, { useState, useEffect } from "react";

// Tip 1: Remember to use the useState hook to create your state.
// Tip 2: Initialize your state with a list of 3(!) book titles as strings.

export default function Books() {
  // Tip 3: Define your state here using useState.

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(["Java", "Python", "Javascript"]);
  }, []);

  return (
    <div>
      {/* Tip 4: Use the map function to render your list of books within a <ul>. */}
      <h1>Books list goes here</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
