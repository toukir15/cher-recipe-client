import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Recipe() {
  const [singleChefRecipe, setSingleChefRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const recipeData = useLoaderData();
  console.log(recipeData);
  return <div>hellow</div>;
}
