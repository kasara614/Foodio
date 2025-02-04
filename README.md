# Foodio  ##[Live Demo](https://foodio614.netlify.app/)

**Foodio** is a React-based web application that leverages the Live API to fetch and display restaurant data and menus. It provides users with an intuitive and seamless experience for exploring restaurants and their offerings.  

## Features  
- Fetch restaurant details and menus directly from Live online Food Order platform.  
- User-friendly interface built using React.  
- Search and filter options for easy navigation.  
- Responsive design for optimal performance on all devices.  

## Technologies Used  
- **React.js**: Frontend framework for building the user interface.  
- **CSS/tailwind CSS**: For styling the application.  
- **Live API**: To fetch restaurant and menu data.  

## Getting Started  
1. Clone the repository:  
     
   git clone https://github.com/kasara614/foodio.git  
     
2. Navigate to the project directory:  
     
   cd foodio  
  
3. Install dependencies:  
     
   npm install  
     
4. Start the development server:  
     
   npm start  


## Contributions  
Contributions are welcome! Feel free to open issues or submit pull requests to enhance Foodio.

### Below is the behind-the-scene plan, how all this build from scratch 🙂

- Bundler used is "Parcel"

/**   Food Ordering App Planning
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard 
 *      - image
 *      - Name of Res, Star Rating, Cuisines, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

# React Hooks
(Normal JS utility Functions)
- useState() - SuperPowerful State Variables in react
* useState() Hook is a function provided by react that return array with two elements.
* which we destructured into two variables -  current state value and state updater function.

1st variable named - current state value, The initial value of state is passed as an argument to useState() for eg. "name".

2nd variable, the state updater function e.g., setName(), is used to update the state. When you call this function with a new value, React schedules a re-render(not synchronously always) the component to reflect the updated state.
                              const [reactBtn, setReactBtn] = useState("login");
                              onClick={() => {
                                                reactBtn === "login"
                                                ? setReactBtn("logout")
                                                : setReactBtn("login"); 
                                              }
                                        }
- useEffect()

# Redux Tool kit
     - Install @reduxjs/toolkit and react-redux  
     - Build our store
     - Connect our store to our app
     - Slice creation
     - dispatch an action
     - useSelector() hook to Subscribe to the store

# Types of testing (developer)
     - Unit Testing
     - Integration Testing
     - End to End Testing - e2e testing

# Setting up Testing in our app
     - Install React Testing Library, jest
     - Installed Babel dependencies (from jest website - "using babel")
     - Configure Babel (create new file "babel.config.js")
     - Configure Parcel Config file to disable default babel transpilation (create new file ".parcelrc" from Parcel docs)
     - jest configuration (npx jest --init)
     - Install jsdom library
     - Install (@babel/preset-react) to make JSX work in test cases
     - Include @babel/preset-react inside my babel config 
     - npm i -D @testing-library/jest-dom
