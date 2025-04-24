import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Recipe({recipe}) {
  return (
    <div className="m-5  flex flex-col items-start  justify-start text-black font-medium  "  key={crypto.randomUUID()}>
       
       <Link to={`/recipe/${recipe.id}`}>    
      <img src={recipe?.image} alt="recipe image"  />
        <h2 className='font-semibold text-amber-600 m-0 p-0  self-start'>{recipe.title}</h2>
        <div className="w-full flex flex-row items-center gap-1 text-white">
        <FontAwesomeIcon icon={faWallet} className="text-amber-600"/> <p className=''>Price per serving: {Math.floor(recipe.pricePerServing / 10 )}$</p> 
        </div>
        </Link>
      < br />
    </div>
  )
}
