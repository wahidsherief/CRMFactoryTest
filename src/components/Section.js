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

  showAlert(name) {
    alert(name);
  }

  render() {
    return (
        <Panel eventKey={this.props.activeKey}>
            <Panel.Heading>
                <Panel.Title toggle>{this.props.user.username}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible onClick={() => this.showAlert(this.props.user.name)}>
                {this.props.user.name}
            </Panel.Body>
        </Panel>
    );
  }
}


export default Section;