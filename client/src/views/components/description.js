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
          <div className="card col-md-6 offset-md-3">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-justify">{explanation}</p>
              <p className="card-text">
                {copyright && (
                  <small className="text-muted ">
                    {" "}
                    Copryright: {copyright}
                  </small>
                )}
              </p>
            </div>
            <div className="align-self-stretch">
              <img
                src={url}
                alt="NASA image"
                className="rounded img-fluid mb-3"
                max-width="1000px"
                max-height="600px"
              />
            </div>
          </div>
        )}
        <footer className="bg-dark text-white m5-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} tsobczak.pl
        </footer>
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
