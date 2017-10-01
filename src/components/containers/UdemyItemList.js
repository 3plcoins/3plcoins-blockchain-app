/*
    author: Alexander Zolotov
    This is a container(parent) component for UdemyItem components
*/

import React, { Component } from 'react';
import UdemyItem from './UdemyItem';
import {Table} from 'react-bootstrap';
import "../../css/jobslist.css";

class UdemyItemList extends React.Component {

  constructor(props) {
    super(props);
  }

  _getTableHeader() {
    /*<th>Description</th>*/
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Instructors</th>
          <th>Price</th>
          <th>Link</th>
        </tr>
      </thead>);
  }

  render() {

    let listContent = <p>No Courses Found</p>;
    
    if (typeof this.props !== "undefined" && typeof this.props.items !== "undefined" && this.props.items.length > 0) {
      
      let udemyItems = [];

      for (let i = 0; i < this.props.items.length; ++i) {
        udemyItems.push(<UdemyItem key={i} item={this.props.items[i]}/>);
      }

        listContent = (
        <Table responsive striped bordered condensed hover>
          {this._getTableHeader()}
          <tbody>
            {udemyItems}
          </tbody>
        </Table>);
    }

    return (
        <div>
          <h2>Udemy Courses:</h2>
          {listContent}
        </div>
    );
  }

}

export default UdemyItemList;