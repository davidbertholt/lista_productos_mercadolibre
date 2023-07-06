import { useEffect, useState } from "react";
import "./App.css";
const api_base = import.meta.env.VITE_API_URL;
const request_url = "search?q=Apple%20IPod";
function App() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_base}${request_url}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      })
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(results, null, 2)}</pre>;
}

export default App;
