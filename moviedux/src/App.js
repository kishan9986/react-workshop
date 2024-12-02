import "./App.css";
import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
      {/* <Books></Books> */}
    </div>
  );
}

export default App;
