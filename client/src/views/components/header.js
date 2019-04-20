import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dateApodInput } from "../../control/actions/apodAction";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  submitButtonClick = event => {
    this.props.dateApodInput({
      dateApod: document.getElementById("textArea").value
    });
  };

  componentDidMount() {
    this.props.dateApodInput({
      dateApod: "2019-04-20"
    });
  }

  componentDidUpdate = prevProps => {
    const { dateApod } = this.props;
    if (prevProps.dateApod !== dateApod) {
      this.props.history.push({
        state: {
          dateApod: dateApod
        }
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Astronomy Picture of the Day powered by NASA API</h1>
        <div>
          <input
            id="textArea"
            type="text"
            placeholder="Data(format: RRRR-MM-DD)"
          />
          <button onClick={this.submitButtonClick}>ENTER</button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  dateApodInput: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dateApod: state.dateApod
});

export default connect(
  mapStateToProps,
  { dateApodInput }
)(Header);
