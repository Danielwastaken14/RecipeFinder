import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-[#1F2F3F] p-4 shadow-md flex justify-center">
      <div className="flex space-x-8 text-white font-semibold text-lg">
        <Link
          to="/"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/FavoriteRecipes"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          Favorite Recipes
        </Link>
        <Link
          to="/account"
          className="hover:text-amber-400 transition-colors duration-200"
        >
          Manage Account / Log in
        </Link>
      </div>
    </nav>
  )
}
