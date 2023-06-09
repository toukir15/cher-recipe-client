import { Link } from "react-router-dom";

export default function ChefDetails({ singleChef }) {
  const {
    chef_details,
    chef_id,
    chef_name,
    chef_picture,
    likes,
    experience,
    number_of_recipe,
  } = singleChef;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
      <figure className=" bg-cover">
        <img src={chef_picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p className="m-0 p-0 text-gray-700">{chef_details}</p>

        <div className="flex items-center justify-between">
          <div>
            <p>
              <span className="font-medium">Experience:</span> {experience}
            </p>
            <p>
              <span className="font-medium">Number of Recipe: </span>
              {number_of_recipe}
            </p>
            <p>
              <span className="font-medium">Likes: </span>
              {likes}
            </p>
          </div>
          <div className="card-actions ">
            <Link to={`/recipe/${chef_id}`}>
              <button className="btn btn-warning">Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
