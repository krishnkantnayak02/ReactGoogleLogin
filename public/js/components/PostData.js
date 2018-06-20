import React, { Component } from "react";
import { Player } from "video-react";
import ReactPlayer from 'react-player';


export default class PostDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.content) {
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
                  console.log("data checking>>>", data)
                  return (
                    <div className="padding-top20">
                      {data.displayName}

                      {data.objectType == 'video' ? (
                        <div className="container padding-top20">
                          {/* write code to show video here */}
                          <Player>
                            <source src={data.url}  />
                            </Player>
                            {/* <div className='player-wrapper'>
                                <ReactPlayer
                                  className='react-player'
                                  url={data.url}
                                  width='200px'
                                  height='200px'
                                />
                              </div> */}
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
