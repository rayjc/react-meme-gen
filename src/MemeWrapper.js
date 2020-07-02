import React from 'react';
import './MemeWrapper.css';
import { useDispatch } from 'react-redux';


const MemeWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'REMOVE', payload: children.props.name });
  }

  return (
    <div className="MemeWrapper">
      {children}
      <button onClick={handleClick}>Abort Mission!</button>
      <hr />
    </div>
  )
}

export default MemeWrapper;