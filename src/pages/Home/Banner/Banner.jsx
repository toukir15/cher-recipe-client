// import banner1 from "../../../assets/banner/banner1.jpg";

import { Link } from "react-router-dom";

export default function Banner() {
  // console.log(object);
  return (
    <div className="text-white container mx-auto h-screen flex justify-center flex-col">
      <h1 className="text-4xl font-bold">Banner detail here</h1>
      <p className="w-2/4 my-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        molestias explicabo unde fuga cumque. Quam alias esse ullam repellendus,
        ducimus, voluptatum eum nesciunt animi excepturi eius aut error! A
        quisquam vel provident eaque id, aliquid eveniet laborum adipisci
        molestias rem natus suscipit voluptatem, libero est culpa rerum ea enim!
        Maxime, quaerat voluptate. Ex ut, repellat asperiores dicta eveniet
        maiores reprehenderit perspiciatis, odio rem iste quidem perferendis vel
        quae! Perferendis, blanditiis obcaecati aliquam excepturi itaque quo id
        quas, cumque beatae sapiente quaerat voluptates est voluptas voluptatum
        velit quisquam veniam distinctio possimus nisi tempora natus.
        Cupiditate, perferendis itaque quia id vel nostrum?
      </p>
      <div>
        <Link to="/recipeLayout">
          <button className="btn btn-primary">View Recipe</button>
        </Link>
      </div>
    </div>
  );
}
