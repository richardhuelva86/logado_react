import {React, Component} from 'react';
/https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b/



class LoginForm extends Component{
    constructor(props){
        super(props);
        this.enviar = this.enviar.bind(this);
        this.state = {
            user: "",
            password: ""
        }
    }

    enviar(e){
        e.preventDefault();
        Actions.login(); 

    }
    change(e){
        e.preventDefault();
        this.setState({
            [] = 
        });

    }


    return (
        <form>
            <input type="text" name="user"/>
            <input type="password" name="password"/>
            <input type="submit" onClick={this.enviar}
        </form>
    );
}

export default LoginForm;