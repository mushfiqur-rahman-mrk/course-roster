import toast  from 'react-hot-toast';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [courses,setcourses]=useState([]);
    const [selectedCourses,setselectedCourses]=useState([]);
    const [CreditHours,SetCreditHours]=useState(0);
    const [totalprice,settotalprice]=useState(0);
    const [reaminingCredits,setremainingCredit]=useState(20);
    

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setcourses(data))

    },[]);
    
    // const set=setremainingCredit(newremainingCredit);
 

          
    const selectedCourse=(course,id)=>{
        
        const isExist=selectedCourses.find(item=>item.id==id)
     
        if(isExist){
            // return alert('This course is already selected.')
            toast.error(`${course.title} is already selected.` )
        }
        else{
            // handle Remaining Credit hour 
            const newremainingCredit=(reaminingCredits - course.credit);
            
           
            
            if(newremainingCredit>= 0){
                
                setremainingCredit(newremainingCredit)
               
                // handle now course 
                const newCourse=[...selectedCourses,course];
                setselectedCourses(newCourse);
                // handle course creadit
                const creadithour=course.credit;
                const newcredithour=CreditHours+creadithour;
                SetCreditHours(newcredithour);
                
                // handel Total Price
                const price=course.price;
                const newprice=totalprice+price;
           
                const tofixedNewPrice=parseFloat(newprice.toFixed(2));
             
                settotalprice(tofixedNewPrice);
                // settotalprice(newprice);
               
                
            }
                else{
                    toast.error("You don't have enough credit hour!");
                }
            
        }
       
    }

    return (
        <div className='  flex container mx-auto mb-10 px-4 '>
            <div className='xl:w-3/4 md:w-1/2 grid lg:grid-cols-2 lg:w-3/2 xl:grid-cols-3 gap-8'>
                {
                    courses.map((course,idx)=> <Cards key={idx} selectedCourse={selectedCourse}  course={course}></Cards>)
                }
            </div>
            <Sidebar className="xl:w-1/4 lg:w-1/3 md:w-1/2"
            selectedCourses={selectedCourses}
            CreditHours={CreditHours}
            totalprice={totalprice}
            reaminingCredits={reaminingCredits}

              ></Sidebar>
        </div>
    );
};




export default Home;