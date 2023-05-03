import { useEffect, useState } from "react";
import ChefDetails from "../ChefDetails/ChefDetails";

export default function Chef() {
  const [chef, useChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => useChef(data));
  }, []);
  console.log(chef);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-20">Chef</h2>
      <div className="container mx-auto grid md:grid-cols-3 mt-20">
        {chef.map((singleChef) => (
          <ChefDetails
            key={singleChef.chef_id}
            singleChef={singleChef}
          ></ChefDetails>
        ))}
      </div>
    </div>
  );
}
