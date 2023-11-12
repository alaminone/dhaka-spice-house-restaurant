import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import Cover from "../../shareditem/cover/Cover";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";


const Pizza = () => {
    const [menu] = useMenuhuk();

    const pizza = menu.filter((item) => item.category === "pizza");
    return (
        <div>
        <Cover
img={'https://i.ibb.co/56gGM1D/pizza-bg.jpg'}
title={'Pizzza'}
content={'Satisfy your pizza cravings at Dhaka Spice House Restaurant, home to the finest slices in town. Immerse your taste buds in a symphony of flavors, with handcrafted crusts and premium toppings. Experience pizza perfection, only at Dhaka Spice House, where every bite is a celebration of taste and tradition.'}
></Cover>

<div>

<div className="grid md:grid-cols-2 gap-6 my-16">
{pizza.map((menuitem) => (
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
</div>
    );
};

export default Pizza;