
import React, { Component } from 'react';
import Select from 'react-select';

const customStyles = {
    option: (base, state) => ({
      ...base,
      borderBottom: '0',
      color: 'blue',
      padding: 0,
      margin:0,
      height:30
    }),
    // control: () => ({
    //   // none of react-selects styles are passed to <View />
    //   width: 200,
    //   height:30
    // }),
    // singleValue: (base, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';
  
    //   return { ...base, opacity, transition };
    // }
  }
  
  
  class AssistentSelector extends Component {
    state = {
      selectedOption: [],
    }
    constructor(props){
        super(props);
    }
    componentDidMount() {
        let props = this.props;
        this.setState({
            selectedOption: props.value ? props.value : []
        })
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
            classNamePrefix={'assistent-select'}            
            //styles={customStyles}
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
