import React, { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeDetails/RecipeCard";
const ChefBio = lazy(() => import("../RecipeDetails/ChefBio"));

export default function Recipe() {
  const recipeData = useLoaderData();

  const { name } = recipeData || {};

  return (
    <div className=" container mx-auto">
      <div className="mt-32">
        <Suspense fallback={<div>please wait... Chef Bio is loading</div>}>
          <ChefBio recipeData={recipeData} />
        </Suspense>
      </div>
      <div className="my-20">
        <h2 className="text-center font-medium  text-3xl underlineStyle mb-8 ">
          {name} Recipes
        </h2>
        <div className="card lg:card-side bg-base-100">
          <div className="md:card-body grid md:grid-cols-3">
            {recipeData.recipes.map((recipe, i) => (
              <>
                <RecipeCard key={i} recipe={recipe}></RecipeCard>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
