import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    return (
        <Container>
            <Top>
                <Icon name="account-balance" size={20} color="#FFF" />
                <Title>Filipe</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    )
}
