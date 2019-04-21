import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dateApodInput } from "../../control/actions/apodAction";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date()
    };
  }

  handleDayClick = (day, { selected }) => {
    if (day < new Date()) {
      this.setState({
        selectedDay: selected ? undefined : day
      });
    }
  };

  submitButtonClick = event => {
    var subStringDate = this.state.selectedDay.toJSON().search("T");
    var date = this.state.selectedDay.toJSON().substring(0, subStringDate);
    this.props.dateApodInput({
      dateApod: date
    });
  };

  componentDidMount() {
    var subStringDate = this.state.selectedDay.toJSON().search("T");
    var date = this.state.selectedDay.toJSON().substring(0, subStringDate);
    this.props.dateApodInput({
      dateApod: date
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
      <div className="text-white mb-10">
        <h1>Astronomy Picture of the Day powered by NASA API</h1>
        <div className="col-md-4 offset-md-4">
          <div>
            <DayPicker
              selectedDays={this.state.selectedDay}
              onDayClick={this.handleDayClick}
              disabledDays={day => day > new Date()}
            />
          </div>

          <button
            type="button"
            className="btn btn-success btn-lg btn-block mb-3"
            onClick={this.submitButtonClick}
          >
            CLICK TO FIND PICTURE ON{" "}
            {this.state.selectedDay
              ? this.state.selectedDay.toDateString()
              : "Please select a day"}
          </button>
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
