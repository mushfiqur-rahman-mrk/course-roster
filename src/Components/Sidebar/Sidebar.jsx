import PropTypes from 'prop-types';
 

const Sidebar = ({selectedCourses}) => {
    console.log(selectedCourses)
    return (
        <div>
            <div className="card  ml-4 p-6 bg-white shadow-xl">
             
                <div className="">
                    <h2 className="card-title text-blue-600 font-semibold text-lg ">Credit Hour Remaining  hr</h2>
                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Course Name</p>
                        <ul className='list-decimal list-inside py-4'>
                            {
                                selectedCourses.map((course,idx)=> <li key={idx}>{course.title}</li>)
                            }
                        </ul>


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
    selectedCourses:PropTypes.array
};
export default Sidebar;