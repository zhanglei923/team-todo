import React, { Component } from 'react';
import axios from 'axios2'
import moment from 'moment';

class ProjectSelect extends Component {
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
      onChange(projectName){
        this.props.onChange(projectName)
        this.setState({
            projectName
        })
      }
  render() {
    const listItems = [];
    let projectName = this.state.projectName;
    this.state.projects.map((prj, i) => listItems.push(<option key={i}>{prj}</option>));
    return (
        <select onChange={(e) => this.onChange.bind(this)(e.target.value)} value={projectName}>
            {listItems}
        </select>
    );
  }
}

export default ProjectSelect;
