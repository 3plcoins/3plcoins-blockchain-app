import React, { Component } from 'react';
import JobItem from './JobItem';

class JobsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  render() {
    return (
         <div>
           JobsList
           </div>
    );
  }

}

export default JobsList;