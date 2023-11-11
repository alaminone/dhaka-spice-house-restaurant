
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Bannar = () => {
  return (
    <div>
      <Carousel
        autoFocus={true}  
        autoPlay={true}   
        interval={3000}   
        infiniteLoop={true} 
        centerSlidePercentage={true}
      >
        <div>
          <img src={'https://i.ibb.co/vkHBf9J/04.jpg'} alt="Banner 1" />
        </div>
        <div>
          <img src={'https://i.ibb.co/TcKrht7/02-fotor-2023111111355.jpg'} alt="Banner 2" />
        </div>
        <div>
          <img src={'https://i.ibb.co/1Q06WMN/Untitled-design-fotor-20231111113925.jpg'} alt="Banner 3" />
        </div>
        <div>
          <img src={'https://i.ibb.co/mqVbcPd/05.png'} alt="Banner 4" />
        </div>
        <div>
          <img src={'https://i.ibb.co/42Np1VC/06.png'} alt="Banner 5" />
        </div>
        <div>
          <img src={'https://i.ibb.co/Rcp2dwc/03.png'} alt="Banner 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Bannar;
