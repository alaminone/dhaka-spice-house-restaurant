
import PropTypes from 'prop-types'

const Foodcard = ({item}) => {
   const {name,recipe,image,price} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="">
      <img src={image} alt="Shoes" className="rounded-xl" />
      
    </figure>
    <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-1 rounded-lg'> $ {price}</p>
    <div className="card-body items-center text-center bg-slate-100">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
      <button className="btn btn-outline border-0 text-[#BB8506] border-[#BB8506] border-b-4">
      add to cart</button>
      </div>
    </div>
  </div>
  )
}

Foodcard.propTypes = {
    item:PropTypes
}

export default Foodcard