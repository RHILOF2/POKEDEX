import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar';
import Card from './components/Card';
import './assets/styles.css';

function App() {
  const [dataPokemon, setDataPokemon]=useState([]);
  const [loading, setLoading]=useState(true);
  const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeFun=async()=>{
    setLoading(true)
    const response=await axios.get(url);
    console.log(response.data.results);
    getPokemon(response.data.results);
    setLoading(false);
    //console.log(dataPokemon)
  }
  const getPokemon=async(response)=>{
    response.map(async(item)=>{
      const result=await axios.get(item.url)
      //console.log(result.data)
      setDataPokemon(state=>{
        state=[...state, result.data]
        return state;
      })
    })
  }

  useEffect(()=>{
    pokeFun();
  },[url])


  return (
    <>
      <Navbar></Navbar>
      <Card pokemon={dataPokemon}></Card>  
    </>
  )
}

export default App
