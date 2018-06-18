import React , {Component} from 'react';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {profile : false}
        this.dashboardContains = this.dashboardContains.bind(this);
        this.loadProfile = this.loadProfile.bind(this);
        }
     dashboardContains() {
       let userId = this.props.userProfile.googleId 
       let url = 'https://www.googleapis.com/plus/v1/people/'+userId+'/activities/public'
       axios.get(url)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

    loadProfile(){
        this.setState({loadProfile : true})
    }
    render(){
        console.log("state" , this.state.loadProfile)
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
               return(
            <div className="container">
              {nevbar}
                <div className="container">
                   <h2>Add Stream </h2> <br/>
                        <div className="row">
                            <div className="col-sm-2" >
                            <button type="button" className="btn btn-primary" onClick = {this.dashboardContains}>Google +</button><br/>
                            </div>
                            <div className="col-sm-10" >
                                    <nav className="navbar navbar-light bg-light" style = {{'border':'1px solid'}}>
                                    <button onClick = {this.loadProfile} > Profile </button>
                                    </nav>
                                    {profile}
                            </div>
                        </div>
                </div>
             </div>
        )
    }
}