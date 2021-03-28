import React, { ReactNode } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, TabsContainer, TabsItem, TabText } from './styles';
import colors from '../../assets/colors';
import { Animated } from 'react-native';

interface TabsProps {
  children?: ReactNode;
  translateY: Animated.Value
}

function Tabs({ translateY }: TabsProps) {
  return (
    <Container
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }}
    >
      <TabsContainer>
        <TabsItem>
          <MaterialIcons name='person-add' size={24} color={colors.prim1} />
          <TabText>Indicar amigos</TabText>
        </TabsItem>
        <TabsItem>
          <MaterialIcons name='chat-bubble-outline' size={24} color={colors.prim1} />
          <TabText>Cobrar</TabText>
        </TabsItem>
        <TabsItem>
          <MaterialIcons name='arrow-downward' size={24} color={colors.prim1} />
          <TabText>Depositar</TabText>
        </TabsItem>
        <TabsItem>
          <MaterialIcons name='arrow-upward' size={24} color={colors.prim1} />
          <TabText>Trasnferir</TabText>
        </TabsItem>
        <TabsItem>
          <MaterialIcons name='lock' size={24} color={colors.prim1} />
          <TabText>Bloquiar cartão</TabText>
        </TabsItem>
      </TabsContainer>
    </ Container>
  );
};

export default Tabs;
