 import PropTypes from 'prop-types';
 import { Toaster } from 'react-hot-toast'; 

const Cards = ({course,selectedCourse}) => {
     
    const {id,image,title,description,price,credit}=course
    return (
        <>
            <div className="card bg-white shadow-xl p-4 mb-4">
                <figure><img className='w-full rounded-b-lg ' src={image} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title text-lg mt-4 text-black">{title}</h2>
                    <p className='text-sm text-gray-400 pt-2 text-justify'>{description.slice(0,170)}..</p>
                    <div className='flex justify-between my-3'>
                        <div className='flex'>
                        <img src="dollar-sign 1.png" alt="" />
                        <p className='ml-2'>Price: {price}</p>
                        </div>
                        <div className='flex'>
                        <img src="Frame.png" alt="" />
                        <p className='ml-2'>Credit: {credit}hr</p>
                        </div>
                    </div>
                    <div className="card-actions w-full">
                        <button onClick={()=>selectedCourse(course,id)} className="btn btn-info hover:bg-blue-500 w-full font-bold text-base text-white">Select</button>
                        <Toaster />
                    </div>
                </div>
            </div>
        </>
    );
};
 

Cards.propTypes = {
    course: PropTypes.object.isRequired,
    selectedCourse: PropTypes.func
};

export default Cards;