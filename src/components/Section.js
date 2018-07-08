import React from 'react';
import { Panel } from 'react-bootstrap';

class Section extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: "1"
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }


  /*
  * alert the content of panel body when click
  */
  showAlert(name) {
    alert('User Details of '+ name);
  }

  render() {
    return (
        <Panel eventKey={this.props.activeKey}>
            <Panel.Heading>
                <Panel.Title toggle>{this.props.user.username}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible onClick={() => this.showAlert(this.props.user.name)}>
                <h4>{this.props.user.name}</h4>
                <p><strong>Email: </strong>{this.props.user.email}</p>
                <p><strong>Phone: </strong>{this.props.user.phone}</p>
                <p>
                    <strong>Address: </strong>
                    {this.props.user.address.street}
                    {this.props.user.address.suite}
                    {this.props.user.address.city}
                    {this.props.user.address.zipcode}
                </p>
            </Panel.Body>
        </Panel>
    );
  }
}


export default Section;