import { useState } from 'react';
import fetchSource from './utils/fetches';

function App() {
  const [input, setInput] = useState({
    lastName: '',
    county: ''
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const records = await fetchSource(input.lastName, input.county);
    console.log(records)
    setResults(records)
  }

  return (
    <div>
      <h1>SCARED SQUARED!</h1>
      <p>Search arrest reports for an individual's last name and the county you want to search in!</p>
      <form onSubmit={handleSearch}>
        <input name="lastName" value={input.lastName} onChange={handleInputChange} placeholder="LAST NAME"></input>
        <input name="county" value={input.county} onChange={handleInputChange} placeholder="COUNTY CODE"></input>
        <button>SEARCH</button>
      </form>
      {
        results ? (
          <div>
            {
              results.map((data, index) => {
                return (
                  <div key={index}>
                    <h2>{data.name}</h2>
                    <p>{data.county_state}</p>
                    <p>BOOKED {data.book_date_formatted}</p>
                    {
                      data.charges.length ? data.charges.map((data, index) => {
                        return <p key={index}>CHARGE: {data}</p>
                      }) : <p></p>
                    }
                    <img src={data.mugshot}></img>
                  </div>
                )
              })
            }
          </div>
        ) : <></>
      }
    </div>
  );
}

export default App;
