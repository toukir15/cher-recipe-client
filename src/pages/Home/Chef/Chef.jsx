import { useEffect, useState } from "react";
import ChefDetails from "../ChefDetails/ChefDetails";

export default function Chef() {
  const [chef, useChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => useChef(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-20">Our Chef</h2>
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
