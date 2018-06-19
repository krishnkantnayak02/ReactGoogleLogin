import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.content) {
      console.log("******** image", this.props.content);
      return (
        <div className="col">
          <span>{this.props.content.content}</span>
          {this.props.content.attachments &&
          this.props.content.attachments.length > 0
            ? this.props.content.attachments.map(function(data) {
                console.log("******** image", data.image.url);
                return (
                  <div>
                    <img src={data.image.url} />
                  </div>
                );
              })
            : ""}
        </div>
      );
    } else {
      return <div />;
    }
  }
}