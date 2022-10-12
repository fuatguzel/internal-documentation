import React from 'react';

/**
 * The urls are for remote content. For local content, you might need to pass require resolve instead.
 * @param param0 
 * @returns 
 */
export default function Screenshot({ url }) {
  return (
    <img className="screenshot" src={url}></img>
  );
}