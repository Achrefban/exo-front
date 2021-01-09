import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { useState, useEffect} from 'react';
import Villes from './Villes';

function App() {
    //an array with all data from the api
    const [data, setData] = useState([]);

  //filling data from the back api
  useEffect(() => {
    fetch("/villes", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then(response => response.json())
    .then((json) => setData(json));
  }, []);


  


  



  return (
    <div>
      <Villes data={data}/>
    </div>
  );
      }
export default App;
