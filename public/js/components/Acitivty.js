import React, { Component } from "react";
import Post from "./PostData";

export default class Acitivty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userProfile  = this.props.profile;
    console.log("profile???????????", userProfile)
    if (this.props.activity) {
      return (
        <div className="row">  
            <h2>Time Line</h2>
          {this.props.activity.data.items.map(function(data) {
            return <Post content={data.object}  profile = {userProfile} />;
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}