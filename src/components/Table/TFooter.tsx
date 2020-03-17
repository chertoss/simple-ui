import React from 'react';

interface PropTypes {
  children: React.ReactNode;
}

export const TFooter = (props: PropTypes) => <tfoot>{props.children}</tfoot>;
