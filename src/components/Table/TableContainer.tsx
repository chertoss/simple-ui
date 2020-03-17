import React from 'react';
import styled, { css } from 'styled-components';

interface PropStyled {
  bordered?: boolean;
  fullWidth?: boolean;
}

interface PropTypes {
  children: React.ReactNode;
}

const Styles = styled.div<PropStyled>`
  ${(p) =>
    p.bordered &&
    css`
      table,
      td {
        border-collapse: collapse;
        border: 1px solid black;
      }
    `};

  ${(p) =>
    p.fullWidth &&
    css`
      table {
        width: 100%;
      }
    `};
`;

export const TableContainer = (props: PropTypes & PropStyled) => (
  <Styles {...props}>{props.children}</Styles>
);
