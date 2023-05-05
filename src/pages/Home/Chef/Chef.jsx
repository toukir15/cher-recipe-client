import { useEffect, useState } from "react";
import ChefDetails from "../ChefDetails/ChefDetails";

export default function Chef() {
  const [chef, useChef] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/chef`)
      .then((res) => res.json())
      .then((data) => useChef(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-medium text-center mt-20 underlineStyle">
        OUR CHEFS
      </h2>
      <div className="container mx-auto grid md:grid-cols-3">
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
