 
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
    console.log(reaminingCredits);

          
    const selectedCourse=(course,id)=>{
        
        const isExist=selectedCourses.find(item=>item.id==id)
     
        if(isExist){
            return alert('This course is already selected.')
        }
        else{
            // handle Remaining Credit hour
            
            if(reaminingCredits> 0){
                
                const newremainingCredit=(reaminingCredits - course.credit);
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
                console.log(newprice);
                const tofixedNewPrice=parseFloat(newprice.toFixed(2));
                console.log(tofixedNewPrice);
                settotalprice(tofixedNewPrice);
                // settotalprice(newprice);
               
                
            }
                else{
                    alert(`You don't have enough credit to select this course.`)
                }
            
        }
       
    }
 
    
    // if(reaminingCredits> 0){
    //      selectedCourse()
    // }
    // else{alert('tka nai')}

    return (
        <div className='flex container mx-auto'>
            <div className='w-3/4 grid grid-cols-3 gap-8'>
                {
                    courses.map((course,idx)=> <Cards key={idx} selectedCourse={selectedCourse}  course={course}></Cards>)
                }
            </div>
            <Sidebar className="w-1/4"
            selectedCourses={selectedCourses}
            CreditHours={CreditHours}
            totalprice={totalprice}
            reaminingCredits={reaminingCredits}

              ></Sidebar>
        </div>
    );
};




export default Home;