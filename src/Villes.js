import React , { useState, useEffect} from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Villes({data}) {
    // what's being typed in the search box
  const [input,setInput] = useState("");

  
  //an array that contains filtered data
  const [villes,setVilles] = useState([]);
  
  


  //filling the arrray with the searched keywords
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      var d = data.filter((i) => {
       return i.nomCommune.toLowerCase().match(e.target.value);
     })
     setVilles(d);
   } 
   else {
     setVilles([]);
   }
  }

    return (
    <div>
        <div className="topdiv row">
            <div className="col-2"><p className="p">Je cherche ...</p> </div>
            <div className="col-10"><input className="searchbar" type="text" placeholder="search" onChange={handleChange} value={input}></input></div>
        </div>
        <div className="row justify-content-around">
            <div className="col-5 left">
                <h2 className="text-center">Villes métropoles</h2>
                    {
                        villes.length ? <div className="V"> {villes.length} villes correspondantes</div> : <div className="F">Aucune ville correspondante</div>
                    }
                    <div className="row justify-content-around">
                        {
                            villes.map((ville,index) => {
                                return (
                                index <= 100 ? <div key={index} className="col-5 ville">{ville.nomCommune}</div> : null 
                                    );
                            })
                        }
                    </div>  
            </div>
            <div className="col-5 right">
                <h2 className="text-center">Villes d'outre-mer</h2>
                <div className="F">Aucune ville correspondante</div>
            </div>
        </div>
    </div>
    )
}
