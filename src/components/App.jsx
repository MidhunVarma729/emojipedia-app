import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function AddTerm(item){
  return(
    <Term 
      key={item.id}
      emoji={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  )
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(AddTerm)}
      </dl>
    </div>
  );
}

export default App;
