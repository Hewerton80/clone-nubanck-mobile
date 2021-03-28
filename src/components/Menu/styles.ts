import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;   

export const Code = styled.View`
  background  : ${colors.prim1};
  padding: 4px;
  align-self: center;
  overflow: hidden;
`;

export const QRCodeImG = styled.Image`    
  width: 80px;
  height: 80px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${colors.borderTopNav};

`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${colors.borderTopNav};
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: ${colors.prim1};
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.borderTopNav};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: ${colors.prim1};
  font-weight: bold;
  font-size: 13px;
`;


