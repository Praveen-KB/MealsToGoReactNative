import styled from "styled-components/native";
import { Card } from "react-native-paper";
export const Cover = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Title = styled.Text`
  margin-top: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.title};

  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};

  font-family: ${(props) => props.theme.fonts.body};
`;

export const RatingAndOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RatingCont = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
