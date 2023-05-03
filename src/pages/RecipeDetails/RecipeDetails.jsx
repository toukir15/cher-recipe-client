import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

export default function RecipeDetails({ recipe }) {
  const [favourite, setFavourite] = useState(false);
  const { recipe_picture, name, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={recipe_picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span>Ingredients: </span>
          <span>{ingredients}</span>
        </p>
        <p>
          <span>Cooking Method: </span>
          <span>{cooking_method}</span>
        </p>
        <div className="flex justify-between items-center my-2">
          <div>
            <Rating
              placeholderRating={rating}
              emptySymbol={<AiOutlineStar className="text-2xl text-gray-300" />}
              placeholderSymbol={
                <AiFillStar className="text-2xl text-yellow-500" />
              }
              fullSymbol={<AiFillStar className="text-2xl text-yellow-500" />}
            />
          </div>
          <div className="card-actions">
            {favourite ? (
              <MdFavorite
                onClick={() => setFavourite(!favourite)}
                className="text-2xl"
              />
            ) : (
              <MdFavoriteBorder
                onClick={() => setFavourite(!favourite)}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
