export default function ReviewsSlider({ singleData, i, dataLength }) {
  const { id, name, img, status, review_title } = singleData || {};

  const sliderId = i + 1;

  const leftBtn = sliderId === 1 ? dataLength : sliderId - 1;
  const rightBtn = sliderId === dataLength ? 1 : sliderId + 1;

  return (
    <div id={`slide${sliderId}`} className="carousel-item relative w-full">
      {/* slider element */}

      <div>
        <p className="text-6xl font-medium">"</p>
        <p>{review_title}</p>
        <div className="flex justify-center my-8">
          <img className="w-20 h-20 rounded-full" src={img} alt="" />
        </div>
        <p className="mb-4">{name}</p>
        <p>COOK</p>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {/* left btn */}
        <a href={`#slide${leftBtn}`} className="btn btn-circle">
          ❮
        </a>
        {/* right btn  */}
        <a href={`#slide${rightBtn}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
