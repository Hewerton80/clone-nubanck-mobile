import React from 'react';
import logo from '../../assets/images/Nubank_Logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Top, Title, Logo } from './styles';
import colors from '../../assets/colors';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo}/>
        <Title>Hewerton</Title>
      </Top>
      <MaterialIcons name='keyboard-arrow-down' size={20} color={colors.prim1}/>
    </Container>
  );
};

export default Header;
