import PropTypes from 'prop-types';
import { useState } from 'react';
 

const Sidebar = ({selectedCourses,CreditHours,totalprice,reaminingCredits}) => {

   
    
    console.log(typeof(totalprice))
    return (
        <div>
            <div className="card  ml-4 p-6 bg-white shadow-xl">
             
                <div className="">
                    <h2 className="card-title text-blue-600 font-semibold text-lg ">Credit Hour Remaining {reaminingCredits} hr</h2>
                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Course Name</p>
                        <ul className='list-decimal list-inside py-4'>
                            {
                                selectedCourses.map((course,idx)=> <li key={idx}>{course.title}</li>)
                            }
                        </ul>


                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Total Credit Hour: {CreditHours} </p>
                    <hr className='my-4  bg-gray-600' />
                    <p className="text-black font-semibold text-lg ">Total Price: {totalprice} USD</p>
                    
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    selectedCourses:PropTypes.array,
    totalprice:PropTypes.number,
    CreditHours:PropTypes.number
};
export default Sidebar;