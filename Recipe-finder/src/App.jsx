/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios'
import Recipe from './Recipe';
import Navbar from './Navbar';


function App() {

const [recipe,setRecipe] = useState([]);
const [loading,setLoading] = useState(true)
const [number, setNumber] = useState(1)


const mergeArrays = (arr1, arr2) => {
  const seenIds = new Set(arr1.map(item => item.id));
  const newItems = arr2.filter(item => !seenIds.has(item.id));
  return [...arr1, ...newItems];
};


async function getRandomRecipe() {
  try {
    const apiKey = '61f29a11c9714c78a8dd041c1957d802';
    const resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`);
    
    console.log(resp.data.recipes);

    setRecipe(prev => mergeArrays(prev, [...resp.data.recipes]));
    setLoading(false);
  } catch (e) {
    console.error(e);
    setLoading(false); // Optional: handle loading on error
  }
}

useEffect(()=>{
  setLoading(true);
  getRandomRecipe()
},[number])

function loadMore(){
  // TODO: pagination
  setNumber(prevNumber => prevNumber + 1)

}

return (
<>
    {loading && "loading..."}
    <Navbar />
    <div className="flex flex-col items-center bg-[#273F4F]">
      
    <div className='grid grid-cols-3 justify-center items-center gap-x-[40px] ml-[300px] mr-[300px]  '>
    {recipe?.map((r)=>(
      <Recipe recipe = {r} key={r.id}/>
    ))}
    <br />
    </div>
    <button className='border-solid border-[1px] p-2 bg-amber-600 font-semibold text-white' onClick={loadMore}>Load more</button>
    </div>
      
    </>
  )
}

export default App
