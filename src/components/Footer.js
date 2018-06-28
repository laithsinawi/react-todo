import React from 'react'
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Footer = () => {
  return (
    <div>
        <a href="javascript:">All</a>
        <a href="javascript:">Active</a>
        <a href="javascript:">Completed</a>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//     onClick: () => dispatch(setVisibilityFilter())
// });

export default connect()(Footer);