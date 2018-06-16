import React , {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import Dashboard from './Dasboard';

export default class App extends Component{

    constructor(){
        super();
        this.state = {toggel : 'login' , userProfile : {}}
        this.responseGoogle = this.responseGoogle.bind(this);

    }

     responseGoogle(response) {
        if(response.profileObj.email != null && response.profileObj.googleId != null){
           this.setState({toggel : 'dashboard' , userProfile :response.profileObj })
           console.log("response>>>>" , response)
        }else{
            alert("only login with google account!!")
        }

      }

    render(){
        const divStyle = {
            marginTop : '200px',
            marginLeft : '400px',
            align : 'center'
          };
        switch(this.state.toggel){
            case "login" :return(
                                <div  style = {divStyle}>
                                    <GoogleLogin
                                            clientId="642089443893-qfr86hlfvk53dc88c2abso29n5035mh8.apps.googleusercontent.com"
                                            buttonText= {<div className="g-signin2" data-onsuccess="onSignIn"></div>}
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                        />
                                </div>
                            )
               break;
               case "dashboard" : return(
                            <Dashboard  userProfile = {this.state.userProfile}/>
                            )
                 break;
                 default : return(
                                <div> </div>
                            )
                  break;
        }
    }
}