import React, { Component } from 'react';
import moment from 'moment';
import dateUtil from '../utils/dateUtil'

class StartEndRange extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    let d1 = task.planned_begin_date
    let d2 = task.planned_end_date
    let dm1, dm2, range;
    if(d1 && d2){
        dm1 = moment(d1)
        dm2 = moment(d2)
        range = dateUtil.getTimeSpan(dm1, dm2, 'end')
    }

    return (
        <div>{range ? range : ''}</div>
    );
  }
}

export default StartEndRange;
