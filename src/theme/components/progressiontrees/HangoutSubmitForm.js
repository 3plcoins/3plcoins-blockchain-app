/*
    author: Alexander Zolotov
*/
import React from 'react';

import ActionLink from '~/src/components/common/ActionLink'
import {Link} from 'react-router-dom'
import "~/src/theme/css/treebrowser.css"
class HangoutSubmitForm extends React.Component {

  constructor(props) {
    super(props);
    
    const timeNow = Date.now();
    const dateNow = new Date(timeNow);

    this.state = {
     isToday: false,
     date: dateNow,
     location: '',
     IsDeepDiveCreated:'none',
     IsDisplayForm:'block',
     dateInputValue: timeNow,
     timeInputValue: "00:00",
    }
  }

  handleDateInputChange(e) {
    e.preventDefault();

    this.setState({dateInputValue: e.target.valueAsNumber});

    console.log(e.target.value);
  }

  handleTimeInputChange(e) {
    e.preventDefault();

    this.setState({timeInputValue: e.target.value});

    console.log(e.target.value);
  }

  handleToggleToday(e) {
    this.setState({isToday: e.target.checked});
  }
  handleOptionChangeLocation(e) {
    this.setState( {location: e.target.value} )
  }

  handleStartHangout(e) {
    e.preventDefault();

    let date = new Date(this.state.isToday ? Date.now() : this.state.dateInputValue);

    const TimeInputSplitted = this.state.timeInputValue.split(':');

    date.setHours(TimeInputSplitted[0]);
    date.setMinutes(TimeInputSplitted[1]);

    this.props.onHandleStartHangout(date);
    this.props.toogleTrenScan();
  }

  handleClick(){
    this.setState({IsDisplayForm:'none',IsDeepDiveCreated:'block'});
    this.props.handleToggle();
  }
  renderForm()  {
    return (
      <form action="#" onSubmit={(e) => this.handleStartHangout(e)}>
        <label className="radio-inline">
          When
        </label>
        <label className="radio-inline">
          <input type="checkBox" checked={this.state.isToday} className="hangout-form-input today" name="optradio" value="today" 
            onChange={(e)=>this.handleToggleToday(e)}/>Today
          <input type="date" className="validate-field required" data-validation-type="string" 
            id="date" name="date" autoComplete="off" placeholder="Date" defaultValue="2020-01-01"
              onChange={(e)=>this.handleDateInputChange(e)}/>
        </label>
          <label className="radio-inline">
            Time
          </label>
          <input type="time" className="validate-field required input-time" data-validation-type="string" 
            id="time" name="date" autoComplete="off" placeholder="00-00" defaultValue={this.state.timeInputValue}
              onChange={(e)=>this.handleTimeInputChange(e)}/>
        <div className="hangout-bottom-line-wrap">
          <label className="radio-inline">
            Location
          </label>
          <label className="radio-inline">
            <input type="checkBox" className="hangout-form-input" name="location" value="Virtual" onChange={(e)=>this.handleOptionChangeLocation(e)}/>Virtual
          </label> 
          <input type="text" name="location" value={this.state.location} placeholder="Location" onChange={(e)=>this.handleOptionChangeLocation(e)}/>
        </div>
        <button type="submit" onClick={()=>this.handleClick()} className="btn-md btn-outline-inverse pull-right hangout-btn-go">Go</button>
      </form>
    );
  }

  render() {
    return (
      <div id="hangout-submit-form" >
      <div id = "DefaultModal" style={{display:this.state.IsDisplayForm}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p>Great! You want to DeepDive into this topic!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>
                People work better in a team and can achieve more than when they are alone.
                Submit a request by providing us with the details below and you will get matches 
                to someone with the same interest to solve relevant questions and unlock Soqqle 
                Trend Scanner for you to browse other opportunities for this skill.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {this.renderForm()}
            </div>
          </div>
        </div>
        </div>
        <div id="afterClickModal" style={{display:this.state.IsDeepDiveCreated}}>
          <p>Your DeepDive has been created! Let's wait for a match!<br/>Find out more about what's happening around this topic below.</p>
          <Link to='/taskManagement' ><button type="submit" className="btn-md btn-outline-inverse goto-task-manager-btn">Goto Task Manager Instead</button></Link>
        </div>
      </div>
    );
  }
}


export default HangoutSubmitForm;