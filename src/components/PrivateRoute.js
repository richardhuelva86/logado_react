import Route from react-router;

class PrivateRouter extends Component{
    constructor(props){
        this.super(props);
    }
    componentDidMount(){


    }
    render(){
        return (
        <Router>
            {this.props.children}


        </Router>
        );
    }


}