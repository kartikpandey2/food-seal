import React, { Component } from "react";
import { Input } from "antd";
import { Redirect } from "react-router-dom";
import "./styles/appStyles.css";

const Search = Input.Search;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null
    };
  }
  handleClick = async value => {
    const url = `search?q=${value}`;
    this.setState({ url });
  };
  render() {
    const { url } = this.state;
    return url ? (
      <Redirect
        to={{
          pathname: `/${url}`
        }}
      />
    ) : (
      <div id="home-div">
        <div id="search-box-div">
          <Search
            placeholder="Enter Restaurant Name"
            onSearch={this.handleClick}
            enterButton
          />
        </div>
      </div>
    );
  }
}

export default Home;
