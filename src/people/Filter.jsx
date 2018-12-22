import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filter } from "../actions/people";

class Filter extends Component {
  static propTypes = {
    text: PropTypes.String
  };

  changeQuery = event => {
    this.props.changeQuery(event.target.value);
  };

  render() {
    return (
      <div className="App-box">
        <input type="text" placeholder="Filter" onChange={this.changeQuery} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.query
});

const mapDispatchToProps = {
  changeQuery: filter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
