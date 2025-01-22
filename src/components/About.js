// import User from "./User";   //functional component
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { data } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About Class Component</h1>
      <div>
        LoggedInUser
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>This is Clone of a Food order App</h2>

      {/* from functional component */}
      {/* <User name={"Sk (function)"} />  */}

      <UserClass name={"first"} location={"Bhilwara (class)"} />
    </div>
  );
};

/**
- Parent Constructor
- Parent Render

    - First Constructor
    - first Render

    - Second Constructor
    - Second Render

<DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount

 */

export default About;