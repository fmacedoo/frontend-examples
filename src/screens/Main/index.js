import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, Annotation, CardFooter } from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>

        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Account balance</Title>
            <Description>$ 304,642.91</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transfer of $ 20.00 received from John Doe successfully today at 6PM.
            </Annotation>
          </CardFooter>
        </Card>
        
      </Content>

      <Tabs />
    </Container>
  );
}