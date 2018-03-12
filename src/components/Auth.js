import Actions from './components/api.js'

class Auth extends Component{
    constructor(props){
        this.state = {
            user: "",
            authorized: false
        }
    }
    isAuthorized(){
        return this.state.authorized;
    }
    login(){
        console.log(Actions.login());
    }
    logout(){
        this.setState({
            user: "",
            authorized: false
        });


    }

}