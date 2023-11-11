import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import moment from "moment";


const Featured = () => {
    
  const newdate = moment().format("MMM Do YY");
  return (
    <section className="text-white pt-12 my-20 bg-fixed"  style={{
        background: `rgba(0, 0, 0, 0.5) url("https://i.ibb.co/bK9jzkz/featured.jpg")`,
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
        height: '800px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SectionTitle
        subheading={"Check it out"}
        mainheading={"Featured Food"}
      ></SectionTitle>
      <div className="flex gap-7 px-16 py-20 justify-center items-center ">
        <img className="w-[650px] h-[350px] rounded-sm" src={"https://i.ibb.co/bK9jzkz/featured.jpg"} alt="" />
        <div className="">
          <p>{newdate}</p>
          <h3 className="uppercase text-2xl">WHERE CAN I GET SOME?</h3>
          <p>
            Indulge your senses at Dhaka Spice House Restaurant, a culinary gem
            where flavors converge in an exquisite dance. Located in the heart
            of the city, our restaurant invites you on a gastronomic journey.
            From aromatic spices to savory delights, our menu celebrates the
            richness of Bangladeshi cuisine. Whether it is a casual outing or a
            special celebration, Dhaka Spice House promises an unforgettable
            dining experience, where every dish tells a story of tradition and
            innovation. Come, savor the taste of authenticity in every bite at
            Dhaka Spice House.
          </p>
          <button className="btn btn-outline border-l-0  border-t-0 border-r-0 text-white  border-b-4 mt-4">Oder Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
