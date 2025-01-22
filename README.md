# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching = Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles

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

 Two types of Exports / Import
 
 - Default Export / Import
      export default Component;
      import Component from "path";

 - Named Export/Import
      export const Component;
      import {Component} from "path";

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

# Routing in Web apps
- Client Side Routing (react uses for single page apps) loads components on first network call
- Server Side Routing - make network call on each route

# Redux Tool kit
     - Install @reduxjs/toolkit and react-redux  
          (npm i @reduxjs/toolkit) and npm (i react-redux)
     - Build our store
     - Connect our store to our app
     - Slice (cartSlice)
     - dispatch(action)
     - Selector

# Types of testing (developer)
     - Unit Testing
     - Integration Testing
     - End to End Testing - e2e testing

# Setting up Testing in our app
     - Install React Testing Library
     - Installed jest
     - Installed Babel dependencies (from jest website - "using babel")
     - Configure Babel (create new file "babel.config.js")
     - Configure Parcel Config file to disable default babel transpilation (create new file ".parcelrc" from Parcel docs)
     - jest configuration (npx jest --init)
     - Install jsdom library
     - Install (@babel/preset-react) to make JSX work in test cases
     - Include @babel/preset-react inside my babel config 
     - npm i -D @testing-library/jest-dom