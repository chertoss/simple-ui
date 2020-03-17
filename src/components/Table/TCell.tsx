import React from 'react';
import styled from 'styled-components';

interface PropTypes {
  children?: React.ReactNode;
}

const TdStyled = styled.td`
`;

export const TCell = (props: PropTypes) => <TdStyled>{props.children}</TdStyled>;
