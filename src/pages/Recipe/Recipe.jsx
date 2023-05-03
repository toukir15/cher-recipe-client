import { useLoaderData } from "react-router-dom";

export default function Recipe() {
  const recipeData = useLoaderData();
  console.log(recipeData);
  return <div>hellow</div>;
}
