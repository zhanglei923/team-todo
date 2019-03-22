import React, { Component } from 'react';
import axios from 'axios2'
import moment from 'moment';
import dateUtil from '../utils/dateUtil'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
      }
      componentDidMount() {
        let me = this;
        axios.get('/action/projects',{params: {
            reponsitoryName:'team-todo'}
        })
        .then(function (response) {
            let projects = response.data;
            //console.log(projects)
            me.setState({
                projects: projects
            })
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      onCheckboxChange(checkbox){

      }
      onChange(a){
        let projectName = a.getAttribute('val')
        this.props.onChange(projectName)
        this.setState({
            projectName
        }, ()=>{
            window.localStorage.setItem('team-todo_projectName', projectName);
        })
      }
  render() {
    const listItems = [];
    let projectName = this.state.projectName;
    this.state.projects.map((prj, i) => listItems.push(
                                            <li key={i}>
                                                <input type="checkbox" 
                                                        checked={prj===this.state.projectName?"true":""}
                                                        onChange={(e) => this.onCheckboxChange.bind(this)(e.target)}
                                                />
                                                <a href="javascript:void(0)" 
                                                    val={prj} 
                                                    onClick={(e) => this.onChange.bind(this)(e.target)}
                                                >{prj}</a>
                                            </li>));
    return (
        <div className="projectlist">
            <span style={{margin: '2px 10px 10px 0', fontWeight:"bolder"}}>
                Projects:
            </span> {'('+dateUtil.getWeekDameName(new Date())+')'+moment().format('YYYY-MM-DD')}
            <hr/>
            <ul style={{marginLeft: '10px'}}>
                {listItems}
            </ul>
        </div>
    );
  }
}

export default ProjectList;
