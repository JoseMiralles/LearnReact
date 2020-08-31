import React from "react";

import Joke from "./Components/Joke.js";
import JokeData from "./Components/Data/JokeData.js"

const App = () => {

  const jkItems = JokeData.map((jokeItem) => {
    return (<Joke Joke={jokeItem}/>)
  });

  return (
    <div>
      {jkItems}
    </div>
  );
};

export default App;
