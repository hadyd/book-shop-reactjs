import React, { Component } from "react";
import {Card, CardColumns, CardDeck, CardImg, car,Button} from "react-bootstrap";
import '../App.scss';

export class Search extends Component {
  render() {
    return (

      <div className="featurette">
        <div className="featurette-inner text-center">
          <form role="form" className="search">
            <div className="input-group input-group-lg">
              <input type="search" placeholder="Search Book .." className="form-control" />
              <div className="input-group-btn">
              <div class="myButton">Search</div>
              </div>
            </div>
          
          </form>
        </div>
      </div>
    );
  }
}

export default Search;