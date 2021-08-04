import React from 'react';

const ViewObject = (props) => {
  const {
    messageA, messageB, messageC, messageD,
  } = props;

  return (
    <>
      <div className="sensor" data-testid="element-A">{messageA}</div>
      <div className="sensor" data-testid="element-B">{messageB}</div>
      <div className="sensor" data-testid="element-C">{messageC}</div>
      <div className="sensor" data-testid="element-D">{messageD}</div>
    </>
  );
};

export default ViewObject;
