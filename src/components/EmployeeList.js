import React from 'react';
import axios from 'axios';
import { PanelGroup } from 'react-bootstrap';
import Section from './Section';

 
class EmployeeList extends React.Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            users: null,
            loading: true,
            error: null
        };
    }
 
    componentDidMount() {
        /*
        * Using axios to fetch the data from API
        */
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                /*
                * If everything goes all good, Then setting up the state of the application.
                */
                const users = res.data;
 
                this.setState({
                    users,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                /*
                * If Something goes wrong, Saving the errors in state and re-rendering it.
                */
                this.setState({
                    loading: false,
                    error: true
                });
            });
    }
 
    /*
    * Method to render the loading screen
    */
    renderLoading() {
        return (
            <div className="accordion-container">
                <h1 className="error">Loading...</h1>
            </div>
        );
    }
 
    /*
    * Method to render the Error Message
    */
    renderError() {
        return (
            <div>
                Something went wrong, Will be right back.
            </div>
        );
    }
 
    /*
    * Method to render the users with checkbox
    */
    renderusers() {
        const { users, loading, error } = this.state;
 
        /*
        * Calling the renderError() method, if there is any error  
        */
        if (error) {
            this.renderError();
        }
 
          return (
            <div className="accordion-container">
              <h1>Employee List</h1>

              <PanelGroup 
                  accordion
                  id="accordion-controlled-example"
                  defaultActiveKey = "1"
              >
              {users.map(user =>
                <Section user={user} key={user.id} activeKey={user.id.toString()}/>
              )}


              </PanelGroup>
            </div>
          );
    }
 
    render() {
 
        /*
        * Using destructuring to extract the 'error' from state.
        */
 
        const { loading } = this.state;
        return (
            <div>
                {loading ? this.renderLoading() : this.renderusers()}
            </div>
        );
    }
 
}
 
export default EmployeeList;