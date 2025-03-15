import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api")  // Replace with actual endpoint
      .then(response => setMessage(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

export default App;
