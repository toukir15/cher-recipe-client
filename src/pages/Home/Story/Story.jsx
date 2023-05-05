export default function Story() {
  return (
    <div className="container mx-auto md:flex my-32">
      <div className="flex-1 flex justify-center items-center flex-col mb-10 md:mb-0">
        <h1 className="text-4xl font-medium underlineStyle">OUR STORY</h1>
        <h2 className="text-3xl font-medium my-8">We Aim to Inspire</h2>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis neque
          praesentium optio quis corporis aspernatur, quisquam libero veniam
          repellendus reprehenderit quasi accusantium possimus assumenda
          provident ratione nostrum quidem cumque sequi.
        </p>
        <button className="btn btn-warning mt-8">SEE BIO</button>
      </div>
      <div className="flex-1">
        <img
          src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/h-grid-img-9.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
