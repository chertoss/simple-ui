import React from 'react';

interface PropTypes {
  children: React.ReactNode;
}
export const THeader = (props: PropTypes) => <thead>{props.children}</thead>;
