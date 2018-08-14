import React, { Component } from 'react';
import moment from 'moment';

const m = new Map(); // 空Map
m.set('1', '一');
m.set('2', '二');
m.set('3', '三');
m.set('4', '四');
m.set('5', '五');
m.set('6', '六');
m.set('0', '日');

class WeekDisplay extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const date = this.props.date;
    let dayText;
    if(date){
        const dateDate = moment(date).toDate();
        const todayDate = moment().toDate();
        //console.log('?', dateDate*1 , todayDate*1)
        let offsetMs = dateDate - todayDate;
        let day = offsetMs / (24*60*60*1000)
        day=Math.round(day*10)
        dayText = (day/10)+'d';
        //console.log(date, dayText)
    }
    //console.log('date', date)
    return (
        <React.Fragment>
            {date?
            <div style={{float:'left', display:'inline'}}>({m.get(moment(date).day()+'')})[{dayText?dayText:false}]</div>
            :
            <div/>
            }
        </React.Fragment>
    );
  }
}

export default WeekDisplay;
