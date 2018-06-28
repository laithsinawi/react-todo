import React from 'react'
import { connect } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../actions';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const Footer = (props) => {
  return (
    <div className="footer">
      <a href="javascript:" onClick={() => { props.dispatch(setVisibilityFilter(SHOW_ALL)) }}>All</a>
      <a href="javascript:" onClick={() => { props.dispatch(setVisibilityFilter(SHOW_COMPLETED)) }}>Completed</a>
      <a href="javascript:" onClick={() => { props.dispatch(setVisibilityFilter(SHOW_ACTIVE)) }}>Active</a>
    </div>
  )
}

export default connect()(Footer);