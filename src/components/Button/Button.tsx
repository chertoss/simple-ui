import React from 'react';
import styled from "styled-components";

interface PropTypes {
  /** Содержимое кнопки */
  children: string | React.ReactNode;
  /** Заблокированная кнопка */
  isDisabled?: boolean;
  /** Обработчик события нажатия на кнопку */
  onClick?: () => void;
}

const ButtonStyled = styled.button`
  padding: 0.6rem 1rem;
  color: red;
`;

export const Button = (props:PropTypes) => {
  const { isDisabled, children, onClick } = props;

  return <ButtonStyled {...{onClick}} disabled={isDisabled}>{children}</ButtonStyled>;
};
