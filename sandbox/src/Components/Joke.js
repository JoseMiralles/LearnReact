import React from "react";

const Joke = (p) => {
  let QuestionM = "";
  let PunchLineM = "";

  if (p.Joke.question) QuestionM = <h4>{p.Joke.question}</h4>;
  if (p.Joke.punchLine) PunchLineM = <h4>{p.Joke.punchLine}</h4>;

  return (
    <span>
      {QuestionM}
      {PunchLineM}
      <hr />
    </span>
  );
};

export default Joke;
