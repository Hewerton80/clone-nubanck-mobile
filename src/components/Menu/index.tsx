import React, { ReactNode } from 'react';
import qrcode from '../../assets/images/qr-code.png';
import {
  Container,
  Code,
  QRCodeImG,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../assets/colors';
import { Animated } from 'react-native';

interface MenuProps {
  children?: ReactNode;
  translateY: Animated.Value
}

function Menu({ translateY }: MenuProps) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
        // extrapolate: 'clamp' // se etiver foras dos valores de range, ele não deixa acontecer
      }),
    }}>
      <Code>
        <QRCodeImG source={qrcode} />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name='help-outline' size={20} color={colors.prim1} />
          <NavText>Me ajude</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='person-outline' size={20} color={colors.prim1} />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='credit-card' size={20} color={colors.prim1} />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='smartphone' size={20} color={colors.prim1} />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
