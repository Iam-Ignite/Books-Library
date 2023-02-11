import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import dataItem from "../src/utils/data.json"
import Card from './component/card';

function App() {
  const [searchBook, setSearchbook] = useState("");
  const [results, setResults] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [loading , setLoading] = useState(true);


  const search = async searchBook => {
    try {
      const response = await fetch(`https://gutendex.com/books?search=${searchBook}`);
      const data = await response.json();
      setResults(data.results);
      setHidden(true);
       setLoading(!true);
    } catch (error) {
      console.error(error);
    }
  };

  

  const searchItem = (e) => {
    if (e.code === "Enter") {
      search(searchBook);

      console.log(searchBook, results);

    }
  }

  return (
    <div className="App">
      <Navbar setSearchbook={setSearchbook} searchBook={searchBook} searchItem={searchItem} />
      <div className="mx-16 mt-4 ">
        <h1 className='text-2xl font-semibold my-5'>Recommended Books</h1>

        
            <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 justify-center ${hidden ? "hidden" : ""}`}>
              {dataItem.map((item) => (
                <Card author={item.author} key={item.book_id} name={item.name} cover={item.cover} url={item.url} />
              ))}

            </div>
      
       {
        loading ? "Loading ..." : (

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
          {results.map((item) => (
                <Card author={item.authors.map(n => n.name)} key={item.id} name={item.title.split(":")[0]} cover={item.formats['image/jpeg']} url={item.url} />
          ))}

        </div>
        )
       }


      </div>
    </div>
  );
}

export default App;
