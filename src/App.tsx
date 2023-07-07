import { useEffect, useState } from "react";
import "./App.css";
import { API } from "./config/constants";

const api_base = API;
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

  return (
    <pre>
      {results.map(result => {
        return (
          <>
            <hr />
            {JSON.stringify(result, null, 2)}
            <hr />
          </>
        );
      })}
    </pre>
  );
}

export default App;
