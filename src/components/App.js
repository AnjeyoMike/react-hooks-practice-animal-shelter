import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
            <div className="App">
              <h1>Adopt a Pet</h1>
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*import React from "react";
import PetBrowser from "./PetBrowser";

function App() {
  return (
    <div className="App">
      <h1>Adopt a Pet</h1>
      <PetBrowser />
    </div>
  );
}

export default App;*/
