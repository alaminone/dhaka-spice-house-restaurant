
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";

const Popularmenu = () => {

const [menu] = useMenuhuk();

const popular = (menu.filter(item => item.category === 'popular') )

  

    return (
     <section className="my-16">
        <SectionTitle
        subheading={'Check it out'}
        mainheading={'FROM OUR MENU'}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
            {
                popular.map(menuitem => <PopularmenuCard 
                    key={menuitem._id}
                    menuitem={menuitem}
                    ></PopularmenuCard>)
            }
        </div>
     </section>
    );
};

export default Popularmenu;