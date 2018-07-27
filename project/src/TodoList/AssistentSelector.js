
import React, { Component } from 'react';
import Select from 'react-select';

  
  class AssistentSelector extends Component {
    state = {
      selectedOption: [],
    }
    constructor(props){
        super(props);
        this.setState({
            selectedOption: props.value ? props.value : []
        })
    }
    componentDidMount() {
        //this.setState(this.props.value)
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      this.props.onChange(selectedOption)
      //console.log(`Option selected:`, selectedOption);
    }
    render() {
      const selectedOption = this.props.value;
      let colleagues = this.props.colleagues;
      let options = [];
      for(let mail in colleagues){
          options.push({
              value: mail,
              label: colleagues[mail].name
          })
      }
      return (
        <Select
            isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isSearchable ={true}
            placeholder ="Assistent(s)"
        />
      );
    }
  }


export default AssistentSelector;
