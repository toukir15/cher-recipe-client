import Recipe from "../pages/Recipe/Recipe";
import Header from "../pages/shared/Header/Header";

export default function RecipeLayout() {
  return (
    <div>
      <div className="text-black bg-black">
        <Header />
      </div>
      <Recipe />
    </div>
  );
}
