"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react';
import { EuropeSVG } from "../app/component/europe";

export default function Home() {
const [countryArr,setCountryArr] =useState([]);
const [newCountry,setNewCountry] =useState('');

function addCountry(){
  event.preventDefault(); //para que onSubmit no se recargue la pagina entera.
  setCountryArr([...countryArr, newCountry.toUpperCase()]);
  setNewCountry("");
};

function handleReset(){
  setCountryArr([]);
  setNewCountry("");
}
  return (
   // <main className={styles.main}>
  <>
   <form onSubmit={addCountry}>
   <input type="text" placeholder="Country.." value={newCountry} onChange={(e)=> setNewCountry(e.target.value)}/>
   <button type="submit">Add</button>
   <button onClick={handleReset}>Reset</button>
   </form>

   <EuropeSVG color="#00B3FF" country={countryArr}/>
  
  </> 
   );
}
//color green, 00B3FF
