import PropTypes from 'prop-types';
 

const Sidebar = () => {
    return (
        <div>
            <div className="card  ml-4 p-6 bg-white shadow-xl">
             
                <div className="">
                    <h2 className="card-title text-blue-600 font-semibold text-lg ">Credit Hour Remaining  hr</h2>
                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Course Name</p>



                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Total Credit Hour: </p>
                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Total Price:  USD</p>
                    
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {

};
export default Sidebar;