import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const [review, setreview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/reviews")
      .then((res) => res.json())
      .then((data) => {
        setreview(data);
      });
  }, []);

  return (
    <section className="mt-20 mb-24">
      <SectionTitle
        subheading={"What Our Clients Say"}
        mainheading={"testimonials"}
      ></SectionTitle>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwipe  ">
          {review.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="mx-20 my-10 px-8 flex flex-col items-center justify-center">
                <div>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    autoPlay={true}
                    interval={3000}
                    readOnly
                  />
                  <RiDoubleQuotesL className="font-black text-9xl text-center mt-4"></RiDoubleQuotesL>
                </div>
                <p className="my-7 text-xl text-center">{item.details}</p>

                <p className="text-4xl text-[#D99904]">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
