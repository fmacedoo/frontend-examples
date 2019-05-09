import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Suggest friends</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Message</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Receive</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Send</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Lock credit card</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}