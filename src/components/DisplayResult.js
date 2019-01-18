import React, { Component } from "react";
import { Card, Spin } from "antd";
import Fetch from "./helpers/fetch";

class DisplayResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  }
  async componentDidMount() {
    const url = this.props.match.url;
    const data = await Fetch(url);
    this.setState({
      data: data.restaurants,
      loading: false
    });
  }
  render() {
    const state = this.state;
    const Result = this.state.data.map((data, index) => {
      return (
        <Card title="Default size card" style={{ width: 300 }} key={index}>
          <p>{`costforTwo: ${data.restaurant.average_cost_for_two}`}</p>
          <p>{`Name: ${data.restaurant.name}`}</p>
          <p>{`Address: ${data.restaurant.location.address}`}</p>
        </Card>
      );
    });
    return state.loading ? <Spin size="large" /> : Result;
  }
}

export default DisplayResult;
