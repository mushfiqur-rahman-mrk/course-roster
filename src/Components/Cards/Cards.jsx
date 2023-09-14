 import PropTypes from 'prop-types';
 

const Cards = ({course}) => {
    // console.log(course);
    const {id,image,title,description,price,credit}=course
    return (
        <div>
            <div className="card bg-white shadow-xl p-4">
                <figure><img className='w-full ' src={image} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title text-lg mt-4">{title}</h2>
                    <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions w-full">
                        <button className="btn btn-info w-full font-bold text-base text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
 

Cards.propTypes = {
    course: PropTypes.object.isRequired,
};

export default Cards;