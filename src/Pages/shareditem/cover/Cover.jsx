/* eslint-disable react/prop-types */


const Cover = ({img , title , content}) => {
    return (
        <div>
        <div className="relative"  style={{
        background: `rgba(0, 0, 0, 0.5) url(${img})`,
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
        height: '800px',
        position: 'relative',
        overflow: 'hidden',
      }}>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 py-7 px-9 w-9/12 text-white text-center rounded-md opacity-80">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5 uppercase">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
};

export default Cover;