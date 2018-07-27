import React from 'react';
import './Dashboard.css';

import { connect } from 'react-redux';
import { updateName } from '../../ducks/reducer';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  render() {
    return(
      <div className='Dashboard'>
        <input onChange={ e => this.setState({ input: e.target.value }) }/>
        <button onClick={ () => this.props.ourUpdateName(this.state.input) }>Create List</button>
        <p>{ this.props.myName }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myName: state.name };
}

export default connect(mapStateToProps, { ourUpdateName: updateName })(Dashboard);