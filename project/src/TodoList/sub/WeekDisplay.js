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
    return (
        <div style={{float:'left', display:'inline'}}>({m.get(moment(date).day()+'')})</div>
    );
  }
}

export default WeekDisplay;
