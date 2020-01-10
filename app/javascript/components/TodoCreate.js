import React, { Component} from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 18px;
  color: #fff;
  flex: 1
`

const Input = styled.input`
  flex: 3
`

class TodoCreate extends Component {
  render() {
    return(
      <div className="d-flex justify-content-center align-items-center w-100">
        <Label className="mr-2">Add new activity:</Label>
        <Input type="text" />
      </div>
    )
  };
};

export default TodoCreate;