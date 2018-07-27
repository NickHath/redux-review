import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  render() {
    return(
      <div className='Dashboard'>
        <input />
        <p>{ this.state.input }</p>
      </div>
    );
  }
}

export default Dashboard;