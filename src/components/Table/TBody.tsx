import React from 'react';

interface PropTypes {
  children: React.ReactNode;
}

export const TBody = (props: PropTypes) => <tbody>{props.children}</tbody>;
