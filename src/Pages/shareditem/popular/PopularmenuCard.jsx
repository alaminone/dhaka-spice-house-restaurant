
import PropTypes from 'prop-types'

const PopularmenuCard = ({menuitem}) => {
    const {name,recipe,image,price} = menuitem;
  return (
  <div>
      <div className='flex gap-4 mx-3 md:mx-0'>
        <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] h-[100px]' src={image} alt="" />
        <div>
            <h3 className='font-medium text-xl'>{name}---------</h3>
            <p className='text-slate-300'>{recipe}</p>
        </div>
        <p className='text-[#D99904]'>
            ${price}
        </p>
        
    </div>
 
  </div>
  )
}

PopularmenuCard.propTypes = {
    menuitem:PropTypes.object,
}

export default PopularmenuCard