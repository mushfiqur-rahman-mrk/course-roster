Question no-1:
Ans:  
    Feature no-1 >
    User can select any course easily by clicking the select button .

    Feature no-2 >
    Total cradit hour for one user is 20 hour.One user can't select more then 20 cradit hour.

    Feature no-3 >
    If the course is already selected user will see an error message on the top if he click the select button again.
  
  
Question no-2:
Ans:  
  
  React components has a built-in state object.The state object is where you store property values that belong to the component.
  When the state object changes, the component re-renders.Here's a breakdown of the state management in this project.
  
  In this project i primarily use useState hook to handle state management.
  
  The first state variable is used to store the list of available courses.The initial value of this state is empty array,later i store data fetched from a JSON file using the fetch API and the setcourses function within the useEffect hook.
  
  Second state variable keeps track of the courses that the user has selected.
  
  Third state variable represents the total credit hours of the selected courses.It is initialized with a value of 0 and is updated whenever a course is selected.
  
  Fourth state variable represents the total price of the selected course and 
  
  The final state handle the remaining credit hours that the user has after selecting courses.
  It starts with an initial value of 20.
  
  I also use prop drilling to share state between parent and child components.
  Through this project, I gained a deep understanding of React's core state management capabilities. I learned to make a balance between component-level state and prop drilling to create maintainable and performant code.













