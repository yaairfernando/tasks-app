import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
`


// const Card = styled(
//   div.styled({
//     background: "#",
//     margin: "20px 0px",
//     width: "80%"
//   })
// )

const TodoListItem = (props) => {
    return(
      <Card className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
    )
};

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TodoListItem;