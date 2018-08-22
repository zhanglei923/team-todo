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
    let daysLeftNum = daysLeft ? parseInt(daysLeft) : 0
    return (
        <div>
            {daysLost ?(task.status === 'done' ? false : ( <div className="daysLost">{daysLost}</div>)):false}
            {daysLeft?(task.status === 'done' ? false : (daysLeftNum < 0) ?
                <div className="daysLeft out-of-time">{daysLeft}</div>
                :
                <div className="daysLeft">{daysLeft}</div>
            ):false}
            {daysRange?(task.status === 'done' ? 
                        (<div className="daysRange">{daysRange}d Cost</div>) 
                        : 
                        <div className="daysRange">{daysRange}</div>
            ):false}
            {!daysLost&&!daysLeft&&!daysRange?"-":false}
        </div>
    );
  }
}

export default StartEndRange;
