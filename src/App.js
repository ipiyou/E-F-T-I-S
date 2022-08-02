import React, { useState, useCallback, useEffect } from "react";

function App() {
  const [count,setcount] = useState(0)

  
  useEffect(() => console.log(count),[count])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
