/*import React from "react";

import Pet from "./Pet";

function PetBrowser() {
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}

export default PetBrowser;*/

import React, { useState, useEffect } from "react";
import Pet from "./Pet";

function PetBrowser() {
  const [pets, setPets] = useState([]);
  const [animalType, setAnimalType] = useState("all");
  const [adoptedPets, setAdoptedPets] = useState([]);

  const fetchPets = async () => {
    let url = "https://mock-api.com/pets"; // Replace with the actual mock API endpoint
    if (animalType !== "all") {
      url += `?type=${animalType}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setPets(data);
  };

  const handleAdoptPet = (id) => {
    setAdoptedPets([...adoptedPets, id]);
  };

  useEffect(() => {
    fetchPets();
  }, [animalType]);

  return (
    <div>
      <div className="filter">
        <label>
          Animal Type:
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
          </select>
        </label>
        <button className="ui button" onClick={fetchPets}>
          Find pets
        </button>
      </div>
      <div className="ui cards">
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            pet={{ ...pet, isAdopted: adoptedPets.includes(pet.id) }}
            onAdoptPet={handleAdoptPet}
          />
        ))}
      </div>
    </div>
  );
}

export default PetBrowser;
