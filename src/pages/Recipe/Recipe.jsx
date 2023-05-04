import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
// import RecipeDetails from "../RecipeDetails/RecipeDetails";

export default function Recipe() {
  const recipeData = useLoaderData();

  const { name, chef_picture } = recipeData;

  return (
    <div className="my-20">
      <h2 className="text-center font-bold text-3xl">{name} Recipes</h2>
      <div className="card lg:card-side bg-base-100 container mx-auto">
        <div className="card-body grid md:grid-cols-3">
          {recipeData.recipes.map((recipe, i) => (
            <RecipeDetails key={i} recipe={recipe}></RecipeDetails>
          ))}
        </div>
      </div>
    </div>
  );
}
