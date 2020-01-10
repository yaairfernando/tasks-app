import React, { Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  flex: 3;
  border: none;
  border-radius: 4px;
  padding: 3px 10px;
  box-shadow: 1px 2px 3px #e4e4e4;
`

// const Submit = styled.input`
//   flex: 1;
//   color: #fff;
//   font-size: 18px;
//   background: #4a47a3;
// `

const Submit = styled(
  styled.input({
    flex: "1",
    color: "#fff",
    fontSize: "18px",
    background: "#4a47a3",
    transition: "all 0.3s ease-in-out"
  })
)`
  &:hover {
    color: #4a47a3;
    background: #fff;
    transform: scale(1.03);
    box-shadow: 1px 3px 4px #4a47a3; 
  }
`

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

class TodoCreate extends Component {
  render() {
    return(
      <div className="mt-5">
        <Form className="d-flex justify-content-center">
          <Input type="text" name="title" placeholder="Add todo...." />
          <Submit type="submit" value="New Task" className="btn ml-3 pb-2 pt-2" />
        </Form>
      </div>
    )
  };
};

export default TodoCreate;