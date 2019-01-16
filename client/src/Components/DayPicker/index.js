
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    console.log('111111111')
    this.props.changeDay(day);
  }
  
  
  render() {
    const { selectedDay } = this.state;

    
    return (
      <div>

        <DayPickerInput onDayChange={this.handleDayChange} />

        {selectedDay && <p> {selectedDay.toLocaleDateString()}</p>}
       

      </div>
    );
  }
}