import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [courses,setcourses]=useState([]);
    const [selectedCourses,setselectedCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setcourses(data))

    },[]);
    const selectedCourse=(course,id)=>{
        console.log(course)
        const isExist=selectedCourses.find(item=>item.id==id)
        console.log(isExist);
        if(isExist){
            return alert('This Course is already selected.')
        }
        else{
            const newCourse=[...selectedCourses,course];
            setselectedCourses(newCourse);
        }
       
    }

    return (
        <div className='flex container mx-auto'>
            <div className='w-3/4 grid grid-cols-3 gap-8'>
                {
                    courses.map((course,idx)=> <Cards key={idx} selectedCourse={selectedCourse}  course={course}></Cards>)
                }
            </div>
            <Sidebar selectedCourses={selectedCourses}  className="w-1/4"></Sidebar>
        </div>
    );
};

Home.propTypes = {

};



export default Home;