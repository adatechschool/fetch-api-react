import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css"



function App() {
  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('/api/jokes/random');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setData(result);
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []); // L'effet ne se déclenche que lors du montage du composant

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  
  return (
    <>
  <div>
    <h1>Data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <p>{data.value}</p>
</div>

</>)
}





export default App;

