import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getApodData } from "../../control/actions/apodAction";

class Description extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const date = {
      apodSearchData: this.props.location.state
    };
    if (this.props.location.state !== prevProps.location.state) {
      this.props.getApodData(date);
    }
  }

  render() {
    const {
      loading,
      loaded,
      error,
      copyright,
      explanation,
      hdurl,
      title,
      url
    } = this.props;

    return (
      <div>
        {loaded && (
          <div>
            <h2> {title} </h2>
            <h4> {explanation} </h4>
            <img src={url} alt="NASA image" />
            {copyright && <h4> copyright | {copyright} </h4>}
          </div>
        )}
      </div>
    );
  }
}

Description.propType = {
  getApodData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {
    explanation,
    url,
    title,
    hdurl,
    copyright,
    loading,
    loaded,
    error
  } = state;

  return {
    ...state,
    loading: loading,
    loaded: loaded,
    error: error,
    title: title,
    url: url,
    explanation: explanation,
    hdurl: hdurl,
    copyright: copyright
  };
};

export default connect(
  mapStateToProps,
  { getApodData }
)(Description);
