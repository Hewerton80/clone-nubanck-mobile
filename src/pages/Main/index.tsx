import React, { useCallback, useRef, useState } from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  State,
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
  GestureEvent
} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';
import colors from '../../assets/colors';

/**
 * @author https://docs.swmansion.com/react-native-gesture-handler/docs/api/gesture-handlers/pan-gh
 */
function Main() {
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  let offset = 0;
  /**
   * o intuito dessa função é alterar o valor da variável 'translateY'
   */
  const onPanGestureEvent = Animated.event([
    {
      nativeEvent: {
        y: translateY,
        // x: translateX
      }
    }
  ],
    {
      useNativeDriver: true,
    }
  );

  // const onPanGestureEvent = useCallback((e: GestureEvent<PanGestureHandlerEventPayload>) => {
  //   const { translationY } = e.nativeEvent;
  //   // console.log(translationY)
  //   translateY.setValue(translationY);
  // },[]);

  const onHandlerStateChange = useCallback((e: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
    /**
     * Estou vendo se o estado anterior desse evento era ativo e não está mais, ou seja quando usuário finalizou a animação
     */
    const { translationY } = e.nativeEvent;
    if (e.nativeEvent.oldState === State.ACTIVE) {
      offset += translationY;

      // translateY.setOffset(offset);
      // translateY.setValue(0);

      let exceededTheLimit = false;
      if (translationY > 100) {
        exceededTheLimit = true;
      }
      else{
        translateY.setOffset(offset);
        translateY.setValue(0);
        offset = 0;
      }
      offset = exceededTheLimit ? 380 : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
      Animated.timing(translateY, {
        toValue: exceededTheLimit? 380: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(()=>{
        // offset = exceededTheLimit? 380: 0;
        // translateY.setOffset(offset);
        // translateY.setValue(0);
      })

    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={e => onHandlerStateChange(e)}
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [0, 380],
                  outputRange: [0, 380],
                  extrapolate: 'clamp' // se etiver foras dos valores de range, ele não deixa acontecer
                }),
                // translateY,
                // translateX
              }]
            }}
          >
            <CardHeader>
              <MaterialIcons name='attach-money' size={28} color={colors.grey2} />
              <MaterialIcons name='visibility-off' size={28} color={colors.grey2} />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 197.611.,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Trasnferência de R$ 20.00,00 recebida de Fulano hoje ás 10:00h
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
