import React from 'react';

interface PropTypes {
  children: React.ReactNode;
}

export const Table = (props: PropTypes) => <table>{props.children}</table>;
