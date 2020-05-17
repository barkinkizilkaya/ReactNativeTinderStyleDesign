import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Right, Body, Button, Icon, Title } from 'native-base'

const HeaderCustom = probs => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name = "menu"></Icon>
                </Button>
            </Left>
            <Body>
                <Title>Tinder Cards</Title>
            </Body>
            <Right>
            <Button transparent>
                    <Icon name = "camera"></Icon>
                </Button>
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({});

export default HeaderCustom;
