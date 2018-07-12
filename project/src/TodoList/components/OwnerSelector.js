import React, { Component } from 'react';

class StatusSelector extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    const task = this.props.task;
    const colleagues = this.props.colleagues;
    const colleaguesList = [];
    for(let c in colleagues){
      colleaguesList.push({...colleagues[c], owner: c});
    }
    return (
        <select value={task.owner} onChange={(e)=>this.props.onChange(e.target.value)}>
                    {colleaguesList.map((item, i) => {
                        return <option key={i} taskid={task.id} value={item.owner}>{item.name}</option>
                    })}
                </select>
    );
  }
}

export default StatusSelector;
