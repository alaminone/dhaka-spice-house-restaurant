import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";

import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";

const TodayOffer = () => {
  const [menu] = useMenuhuk();

  const popular = menu.filter((item) => item.category === "offered");
  return (
    <div>
     
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {popular.map((menuitem) => (
          <PopularmenuCard
            key={menuitem._id}
            menuitem={menuitem}
          ></PopularmenuCard>
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <button className="btn btn-outline border-l-0  border-t-0 border-r-0 border-b-4">
        ORDER YOUR FAVOURITE FOOD        </button>
      </div>
    </div>
  );
};

export default TodayOffer;
