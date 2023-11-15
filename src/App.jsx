import { useState } from "react";
import "./assets/styles.css";
function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" name="photo" />
        <button>Subir</button>
      </form>
    </div>
  );
}

export default App;
