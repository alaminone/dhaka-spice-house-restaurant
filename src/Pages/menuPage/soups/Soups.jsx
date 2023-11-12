import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import Cover from "../../shareditem/cover/Cover";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";

const Soups = () => {
    const [menu] = useMenuhuk();

    const soups = menu.filter((item) => item.category === "soup");
    return (
        <div>
        <Cover
img={'https://i.ibb.co/BCXbb51/soup-bg.jpg'}
title={'soups'}
content={"Embark on a flavorful journey with Dhaka Spice House Restaurant's exceptional soups. Crafted with passion and precision, our soups are a symphony of aromatic spices and wholesome ingredients. Indulge in the best soups in town, exclusively at Dhaka Spice House—a haven for culinary enthusiasts seeking a taste of perfection."}
></Cover>

<div>

<div className="grid md:grid-cols-2 gap-6 my-16">
{soups.map((menuitem) => (
<PopularmenuCard
key={menuitem._id}
menuitem={menuitem}
></PopularmenuCard>
))}
</div>
<div className="flex justify-center mb-6">
<button className="btn btn-outline border-l-0  border-t-0 border-r-0 border-b-4">
ORDER YOUR FAVOURITE FOOD </button>
</div>
</div>
</div>
    );
};

export default Soups;