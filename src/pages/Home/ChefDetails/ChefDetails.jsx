export default function ChefDetails({ singleChef }) {
  const {
    chef_details,
    chef_id,
    chef_name,
    chef_picture,
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
        <p className="m-0 p-0">{chef_details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Recipe</button>
        </div>
      </div>
    </div>
  );
}
