
import PropTypes from 'prop-types'

const SectionTitle = ({subheading,mainheading}) => {
  return (
    <div className='my-5  text-center'>
        <p className='text-[#D99904] text-xs md:text-base mb-3'>---{subheading}---</p>
        <h1 className='text-xl md:text-4xl font-semibold border-y-4 uppercase py-2 w-6/12 md:w-4/12 mx-auto'>{mainheading}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
    subheading:PropTypes.string,
    mainheading:PropTypes.string
}

export default SectionTitle