import React, { Component } from "react";


export default class PostDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log("profile on post page" , this.props.profile.name)
    if (this.props.content) {
      console.log("******** image", this.props.content);
      return (
        <div className="container">
        <div className="qa-message-list" id="wallmessages">
                        <div className="message-item" id="m16">
                            <div className="message-inner">
                                <div className="message-head clearfix">
                                    <div className="avatar pull-left"><a href="./index.php?qa=user&qa_1=Oleg+Kolesnichenko"><img src={this.props.profile.imageUrl}/></a></div>
                                    <div className="user-detail">
                                        <h5 className="handle">{this.props.profile.name}</h5>
                                        <div className="post-meta">
                                            <div className="asker-meta">
                                                <span className="qa-message-what"></span>
                                                <span className="qa-message-when">
                                                    <span className="qa-message-when-data">Jan 21</span>
                                                </span>
                                                <span className="qa-message-who">
                                                    <span className="qa-message-who-pad">by </span>
                                                    <span className="qa-message-who-data"><a href="./index.php?qa=user&qa_1=Oleg+Kolesnichenko">Oleg Kolesnichenko</a></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="qa-message-content">
                                    {this.props.content.content}
                                </div>
                        </div></div>
            </div>
         </div>
         
      );
    } else {
      return <div />;
    }
  }
}