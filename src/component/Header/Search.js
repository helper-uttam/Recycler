import { useEffect } from "react";
import { useState } from "react";
import classes from "./Search.module.css";

const Search = () => {
  const [material, setMaterial] = useState();
  const [result, fetched_result] = useState();
  const [resultFound, setResultFound] = useState(false);
  const [displayRes, setRes] = useState("Search to Display Results");

  useEffect(()=>{   
    const fetchMaterial = async () => {
      const response = await  fetch('https://creativist-4300f-default-rtdb.firebaseio.com/material.json');
  
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
  
      const responseData = await response.json();
  
      const loadedMaterials = [];
      for (const key in responseData){
        loadedMaterials.push({
          key:responseData[key].id,
          nameOfMaterial: responseData[key].name,
          description: responseData[key].description,
          img: responseData[key].img,
        });
      }
      fetched_result(loadedMaterials);

    }
    fetchMaterial().catch(error => console.log(error));
  },[setMaterial]);
  
  const inputHandler = (event) => {
    setResultFound(false);
    setMaterial(event.target.value);
    if(event.target.value.trim().length === 0){
        return;
    }
  }

  
  const submitHandler = () => {
    let enteredString = material.toLowerCase().trim().split(" ").join("");
    for (let index = 0; index < result.length; index++) {
      if (enteredString === result[index].nameOfMaterial) {
        setResultFound(true);
        // console.log(result[index].description);
        setRes(result[index]);
      }
    }
  }

    return(
        <div className={classes.search_}>
        <h1 className={classes.heading}>Recycler</h1>
        <small className={classes.caption}>Let's recycle and reuse the waste, in a creative way!</small>
    <form>
      <input type="text" placeholder="Search.." name="search" onChange={inputHandler} />
      {!resultFound && <p>Click on Re-Cycle to search</p>}
      <button type="button" className="btn btn-success" style={{textAlign:"center"}} onClick={submitHandler} >Re-Cycle</button>
      {<div>
        <h1>{displayRes.nameOfMaterial}</h1>
        <br></br>
        {resultFound && displayRes.description.split().map((e)=> <div><h5>{e}</h5><br></br></div>)}       
      </div>}
      </form>
    </div>
    );
}

export default Search;