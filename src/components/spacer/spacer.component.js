import React from "react";
import Theme from "../../infrastructure/theme";
import styled from "styled-components/native";

const sizeVar = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVar = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getPosition = (position, size) => {
  return `${positionVar[position]} : ${Theme.space[sizeVar[size]]}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = (props) => {
  const { position, size, children } = props;
  const variant = getPosition(position, size);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
