import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [courses,setcourses]=useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setcourses(data))

    },[])

    return (
        <div className='flex container mx-auto'>
            <div className='w-3/4 grid grid-cols-3 gap-8'>
                {
                    courses.map(course=> <Cards key={course.id} course={course}></Cards>)
                }
            </div>
            <Sidebar className="w-1/4"></Sidebar>
        </div>
    );
};

Home.propTypes = {

};



export default Home;