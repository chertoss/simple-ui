import React from 'react';

interface PropTypes {
  type?: 'textarea';
  name?: string;
  id?: string;
}

export const Input = (props: PropTypes) => {
  const { type } = props;
  if (type) {
    return <textarea name="" id="" />;
  }
  return <input type="text" />;
};
