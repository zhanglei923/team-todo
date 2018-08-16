import React, { Component } from 'react';
import moment from 'moment';
import dateUtil from '../utils/dateUtil'

class StartEndRange extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    let beginDate = task.planned_begin_date
    let endDate = task.planned_end_date
    var dm1, dm2, daysRange;
    if(beginDate && endDate){
        dm1 = moment(beginDate)
        dm2 = moment(endDate)
        daysRange = dateUtil.getTimeSpan(dm2, dm1, 'end')
    }
    var daysLost;
    if(beginDate){
        dm1 = moment(beginDate)
        dm2 = moment()
        daysLost = dateUtil.getTimeSpan(dm1, dm2, 'begin')
    }
    var daysLeft;
    if(endDate){
        dm1 = moment(endDate)
        dm2 = moment()
        daysLeft = dateUtil.getTimeSpan(dm1, dm2, 'end')
    }

    return (
        <div>
            {daysLost ? <div className="daysLost">{daysLost}</div>:false}
            {daysLeft ? <div className="daysLeft">{!/^-/.test(daysLeft)?daysLeft:'0'}</div>:false}
            {daysRange ? <div className="daysRange">{daysRange}</div>:false}
        </div>
    );
  }
}

export default StartEndRange;
