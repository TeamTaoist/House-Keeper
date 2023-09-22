import React from "react";
import RouterLink from "router";
import Bg from "assets/images/bg.jpg"

function App() {
  return (
    <div className="App" style={{ background: `url(${Bg})`, backgroundSize: "cover" }}>
      <RouterLink />
    </div>
  );
}

export default App;
