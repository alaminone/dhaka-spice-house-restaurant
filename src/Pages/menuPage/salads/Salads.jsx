import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import Cover from "../../shareditem/cover/Cover";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";


const Salads = () => {
    const [menu] = useMenuhuk();

    const salads = menu.filter((item) => item.category === "salad");
    return (
        <div>
        <Cover
img={'https://i.ibb.co/SPJ0R78/salad-bg.jpg'}
title={'salads'}
content={'Discover the freshest and most exquisite salads at Dhaka Spice House Restaurant. Our culinary artisans meticulously curate vibrant salads bursting with flavor and nutrients. Elevate your dining experience with our crisp, refreshing greens. Visit Dhaka Spice House for a salad sensation that transcends the ordinary, and savor the epitome of culinary excellence.'}
></Cover>

<div>

<div className="grid md:grid-cols-2 gap-6 my-16">
{salads.map((menuitem) => (
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

export default Salads;