import React, {Component} from 'react';
import Buttons from './Buttons';
import data from '../data';
import DisplayUser from './DisplayUser';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            currentUser: 0
        }
    }

    handleNextUser = () => {
        console.log()
        this.state.currentUser === this.state.data.length - 1 ?
         this.setState({ currentUser: this.state.data.length - 1 }) : 
         this.setState({ currentUser: this.state.currentUser + 1 });
    }

    handlePreviousUser = () => {
        this.state.currentUser === 0 ? this.setState({currentUser: 0}) : this.setState({currentUser: this.state.currentUser - 1});
    }

    render(){
        return(
            <section className='user-wrapper'>
                <DisplayUser current={this.state.currentUser} userData={this.state.data}/>
                <Buttons previousUserFn={this.handlePreviousUser} nextUserFn={this.handleNextUser}/>
            </section>
        )
    }
}

export default Users;