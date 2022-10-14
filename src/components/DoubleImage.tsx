import React from 'react';

/**
 * The urls are for remote content. For local content, you might need to pass require resolve instead.
 * @param param0 
 * @returns 
 */
export default function DoubleImage({ leftImage, rightImage }) {
  return (
    <div className="doubleimage-wrapper">
      <img className="screenshot" src={leftImage}></img>
      <img className="screenshot" src={rightImage}></img>
    </div>
  );
}