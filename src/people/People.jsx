import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  };

  renderPerson(person) {
    return (
      <div className="App-box" key={person.id}>
        {person.name}
      </div>
    );
  }

  render() {
    return <div>{this.props.people.map(this.renderPerson)}</div>;
  }
}

const mapStateToProps = state => ({
  people: state.people.filtered
});

export default connect(mapStateToProps)(People);
