// import banner1 from "../../../assets/banner/banner1.jpg";
import pdfFile from "../../../assets/pdf/sample.pdf";

export default function Banner() {
  return (
    <div className="text-white container mx-auto h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl text-center font-bold text-gray-300">
        Welcome to Recipe Avenue br - your one-stop <br /> destination for all
        your favorite recipes!
      </h1>
      <p className="text-center my-6 text-gray-300">
        Looking for mouthwatering recipes to satisfy your cravings? Look no
        further than Recipe Avenue! Our website offers a wide variety of recipes
        for breakfast, lunch, dinner, and even desserts. From traditional dishes
        to modern favorites, our collection has something for everyone. With
        easy-to-follow instructions and detailed ingredient lists, you can
        create delectable dishes that will impress your family and friends. Our
        website is constantly updated with new recipes, so be sure to check back
        often for new culinary inspiration. Join our community and share your
        own recipes and cooking tips with other food lovers. At Recipe Avenue,
        we believe that cooking is not just a necessity, but an art that brings
        people together. Let's cook up something delicious together!
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
