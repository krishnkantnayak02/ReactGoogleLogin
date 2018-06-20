import React, { Component } from "react";

export default class PostDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("profile on post page", this.props.profile.name);
    if (this.props.content) {
      console.log("******** image", this.props.content);
      return (
        <div className="qa-message-list" id="wallmessages">
          <div className="message-item" id="m16">
            <div className="message-inner">
              <div className="message-head clearfix">
                <div className="avatar pull-left">
                  <a href="#">
                    <img height="45px" src={this.props.profile.imageUrl} />
                  </a>
                </div>
                <div className="user-detail">
                  <h5 className="profileName">{this.props.profile.name}</h5>
                </div>
              </div>
              <div className="qa-message-content">
                {this.props.content.content}
              </div>
              {this.props.content.attachments &&
                this.props.content.attachments.map(function(data) {
                  return (
                    <div className="padding-top20">
                      {data.displayName}

                      {data.embed ? (
                        <div className="container">
                          {/* write code to show video here */}
                          <img
                            src={data.image.url}
                            height={data.image.height}
                          />
                        </div>
                      ) : (
                        <div className="padding-top20">
                          <img
                            src={data.image.url}
                            height={data.image.height}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="height24" />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
