import React , {Component} from 'react';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {profile : false, postData : []}
        this.dashboardContains = this.dashboardContains.bind(this);
        this.loadProfile = this.loadProfile.bind(this);
        }
     dashboardContains() {
        let that = this
       let userId = this.props.userProfile.googleId
       let url = 'https://www.googleapis.com/plus/v1/people/'+userId+'/activities/public?key=AIzaSyBGsUeaAmQd_EaNVwBcyiUfjDPHtJ_G8Ds'
       axios.get(url)
                .then(function (response) {
                    that.setState({postData : response.data.items} )
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

    loadProfile(){
        this.setState({loadProfile : true})
    }
    render(){
        let nevbar  = <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" >Google Login App</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a >Home</a></li>
                                <li><a >Dashboard</a></li>
                            </ul>
                            </div>
                        </nav>

        var profile =   this.state.loadProfile && <div className="row">
                                                        <div className="col-sm-8" >
                                                        <label >Name : {this.props.userProfile.name}</label> <br/>
                                                        <label >MailId : {this.props.userProfile.email}</label><br/>
                                                        </div>
                                                        <div className="col-sm-4" >
                                                        <img src = {this.props.userProfile.imageUrl} />
                                                        </div>
                                                    </div> 
          let postList =  this.state.postData.map((items) => {
                                    return(
                                        <div>
                                        <label >Title : {items.title}</label> <br/>
                                        <label >updated : {items.updated}</label><br/>
                                        </div>
                                    )
                            })

              let post =  this.state.postData.length > 0    && <div className="row">
                                                    <div className="col-sm-8" >
                                                      {postList}
                                                    </div>
                                                    </div>
               return(
            <div className="container">
              {nevbar}
                <div className="container">
                   <h2>Add Stream </h2> <br/>
                        <div className="row">
                            <div className="col-sm-2" >
                            Google +
                            </div>
                            <div className="col-sm-10" >
                                    <nav className="navbar navbar-light bg-light" style = {{'border':'1px solid'}}>
                                    <button onClick = {this.loadProfile} > Profile </button>
                                    <button onClick = {this.dashboardContains} > Public Post </button>
                                    </nav>
                                    {profile}
                                    {post}
                            </div>
                        </div>
                </div>
             </div>
        )
    }
}