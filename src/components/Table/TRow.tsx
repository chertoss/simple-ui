import React from 'react';

interface PropTypes {
  children: React.ReactNode;
}

export const TRow = (props: PropTypes) => <tr>{props.children}</tr>;
