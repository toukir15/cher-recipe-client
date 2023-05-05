import { ImFacebook } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";

export default function ChefBio({ recipeData }) {
  // scroll top
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const { chef_bio, number_of_recipe, chef_picture, experience, likes, name } =
    recipeData || {};
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-medium mb-6 underlineStyle">CHEF BIO</h1>
      <h2 className="text-3xl font-medium mb-6">{experience} of Experience</h2>
      <div className="">
        <img
          className="h-72 w-72 rounded-full mb-4 object-cover"
          src={chef_picture}
          alt={name}
        />
      </div>
      <h3 className="text-2xl font-medium mb-4">{name}</h3>
      <p className="text-center mb-4 w-3/4">{chef_bio}</p>
      <div className="flex gap-10 mb-4">
        <p>
          <span className="text-lg font-medium">Number of Recipe: </span>{" "}
          <span>{number_of_recipe}</span>
        </p>
        <p>
          <span className="text-lg font-medium">Likes: </span>{" "}
          <span>{likes}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <ImFacebook className="text-2xl hover:text-yellow-500 transi" />
        <GrTwitter className="text-2xl hover:text-yellow-500 transi" />
        <AiFillInstagram className="text-2xl hover:text-yellow-500 transi" />
      </div>
      <hr className=" border-6 w-full mt-10" />
    </div>
  );
}
