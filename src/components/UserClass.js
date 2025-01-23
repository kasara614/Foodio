import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    this.state={
      userInfo:{
        name: "Dummy",
        location: "Default",
      },
    };

    console.log("Constructor");
  }

    async componentDidMount() {
        // Api call

        const data = await fetch("https://api.github.com/users/kasara614");
        const json = await data.json();

        this.setState({
          userInfo: json,
        });

        console.log(json);
    }

componentDidUpdate(){
  console.log("Component did update");
}

componentWillUnmount(){
  console.log("component will unmount");
  
}

  render() {
    // debugger;
    console.log("Render");

    // const { name, location } = this.props;
    // const { count } = this.state;

    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button onClick={() => {
          //NEVER UPDATE STATE VARIABLES DIRECTLY 
          // this.state.count = this.state.count + 1;
          this.setState({
            count: this.state.count + 1,
          });
        }}
        >
          increment</button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @kasara614</h4>
      </div>
    )
  };
};

export default UserClass;

/**   This is How whole life cycle methods works
 * 
 *    ---- Mounting ------
 * 
 *  Constructor (loads with dummy data)
 *  Render (loads with dummy data)
 *        <HTML Dummy >
 *  Component Did Mount
 *        <API Call>
 *        <this.setState> --> State variables is updated
 * 
 *    ------- Update  ---------
 *    
 *      render(API data)
 *      <HTML(loads with new data)>
 *  componentDidUpdate 
 */