import { React, useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../App.css';

function Listurls() {
    const [data, setData] = useState("");
  const fetchData = async () => {
    const api = await fetch("http://localhost:8888/api/list");
    setData(await api.json());
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Original URL</th>
            <th scope="col">Shortened URL</th>
            <th scope="col">Count</th>
            
          </tr>
        </thead>
        <tbody>
            {data.data && data.data.map(row => {
                return(
                <tr key={row.id}>
                    <th >{row.id}</th>
                    <td >{row.original_link}</td>
                    <td>http://localhost:8888/{row.shortened_link}</td>
                    <td>{row.counter}</td>
                </tr>
                )
            })}    
        </tbody>
      </table>
      </header>
    </div>
  );
}

export default Listurls;