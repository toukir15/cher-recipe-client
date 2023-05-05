// import banner1 from "../../../assets/banner/banner1.jpg";
import pdfFile from "../../../assets/pdf/sample.pdf";

export default function Banner() {
  return (
    <div className="text-white container mx-auto h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl text-center font-bold text-gray-300 px-2">
        Welcome to Recipe Avenue - your one-stop <br /> destination for all your
        favorite recipes!
      </h1>
      <p className="text-center my-6 text-gray-300 px-2">
        Looking for mouthwatering recipes to satisfy your cravings? Look no
        further than Recipe Avenue! Our website offers a wide variety of recipes
        for breakfast, lunch, dinner, and even desserts. From traditional dishes
        to modern favorites, our collection has something for everyone. With
        easy-to-follow instructions and detailed ingredient lists, you can
        create delectable dishes that will impress your family and friends. Our
        website is constantly updated with new recipes
      </p>
      <div>
        <a href={pdfFile} download={"sample.pdf"}>
          <button type="download" className="btn btn-warning">
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
}
