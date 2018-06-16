import React , {Component} from 'react';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.dashboardContains = this.dashboardContains.bind(this);
        }
     dashboardContains() {
        console.log("testing")
    }  
    render(){
        let nevbar  = <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" >Google Login App</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a >Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                            </ul>
                            </div>
                        </nav> 
               return( 
            <div className="container">
             {nevbar}
                    <button type="button" className="btn btn-primary" onClick = {this.dashboardContains}>Add Stream</button><br/>
                    <label > name : {this.props.userProfile.name}</label> <br/>
                    <label > emailId : {this.props.userProfile.email}</label><br/>
                    <img src = {this.props.userProfile.imageUrl} />
          </div>
        )
    }
}