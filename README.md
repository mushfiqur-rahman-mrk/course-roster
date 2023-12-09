## Project Name - Course Roster
### Project Description

In this project i primarily use useState hook to handle state management.
The first state variable is used to store the list of available courses.The initial value of this state is empty array,later i store data fetched from a JSON file using the fetch API and the setcourses function within the useEffect hook.
Second state variable keeps track of the courses that the user has selected.
Third state variable represents the total credit hours of the selected courses.It is initialized with a value of 0 and is updated whenever a course is selected.
Fourth state variable represents the total price of the selected course and 
The final state handle the remaining credit hours that the user has after selecting courses.
It starts with an initial value of 20.
  
I also use prop drilling to share state between parent and child components.
Through this project, I gained a deep understanding of React's core state management capabilities. I learned to make a balance between component-level state and prop drilling to create maintainable and performant code.













