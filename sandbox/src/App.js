import React from "react";

import Joke from "./Components/Joke.js";

const App = () => {
  const Joke1 = {
    question: "Knock knock",
    punchLine: "huehuehue",
  };
  const Joke2 = {
    question: "What did the dead man say?",
  };

  return (
    <div>
      <Joke Joke={Joke1} />
      <Joke Joke={Joke2} />
    </div>
  );
};

export default App;
