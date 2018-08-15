import React, { Component } from 'react';
import axios from 'axios2'
import moment from 'moment';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
      }
      componentDidMount() {
        let me = this;
        axios.get('/action/projects')
        .then(function (response) {
            let projects = response.data;
            console.log(projects)
            me.setState({
                projects: projects
            })
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      onChange(a){
        let projectName = a.getAttribute('val')
        this.props.onChange(projectName)
        this.setState({
            projectName
        })
      }
  render() {
    const listItems = [];
    let projectName = this.state.projectName;
    this.state.projects.map((prj, i) => listItems.push(
                                            <li key={i}>
                                                <input type="checkbox" checked={prj===this.state.projectName?"true":""}/>
                                                <a href="javascript:void(0)" 
                                                    val={prj} 
                                                    onClick={(e) => this.onChange.bind(this)(e.target)}
                                                >{prj}</a>
                                            </li>));
    return (
        <div className="projectlist">
            <div style={{margin: '10px 10px 10px 0', fontWeight:"bolder"}}>Projects:</div> 
            <ul>
                {listItems}
            </ul>
        </div>
    );
  }
}

export default ProjectList;
