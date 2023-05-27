import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RecipeCard({ recipe }) {
  const notify = () => toast("Add fovourite successfully!");
  const [favourite, setFavourite] = useState(false);
  const { recipe_picture, name, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 md:mb-0">
      <figure className="p-4 ">
        <img
          className="rounded-lg shadow-lg"
          src={recipe_picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>
          <span className="text-lg font-medium">Ingredients: </span>
          <span>{ingredients}</span>
        </p>
        <p>
          <span className="text-lg font-medium">Cooking Method: </span>
          <span>
            {cooking_method.length < 250 ? (
              cooking_method
            ) : (
              <>
                {cooking_method.slice(0, 250)} <br />
                <button className="btn btn-active btn-link text-yellow-500 p-0 m-0">
                  Show More
                </button>
              </>
            )}
          </span>
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
                onClick={() => {
                  setFavourite(!favourite), notify();
                }}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
