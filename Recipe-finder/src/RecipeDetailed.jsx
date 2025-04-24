import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios'
import Navbar from './Navbar';
function RecipeDetailed() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading,setLoading] = useState(true)
  async function getRecipe() {
    try {
      const apiKey = '61f29a11c9714c78a8dd041c1957d802';
      const resp = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      
      console.log(resp.data);
      setRecipe(resp.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(true); // Optional: handle loading on error
    }
  }

  useEffect(() => {
    setLoading(true);
    getRecipe()
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center bg-[#273F4F] min-h-screen p-10 text-white">
      <div className="w-full max-w-4xl bg-[#324D5C] p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-amber-500 mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-lg mb-6"
          />

        <h2 className="text-2xl font-semibold text-amber-400 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.extendedIngredients.map((item,index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-amber-400 mb-2">Instructions</h2>
        <p className="leading-relaxed">{recipe.instructions || "No instructions available."}</p>

        <div className="mt-6 flex flex-row items-center gap-2">
          <span className="text-amber-300 font-semibold">Price per serving:</span>
          <span>${Math.floor(recipe.pricePerServing / 10)}</span>
        </div>
      </div>
    </div>
          </>
  );
}

export default RecipeDetailed;
