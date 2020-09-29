
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { StyleSheet, ActivityIndicator, FlatList, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base'
import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'
import commonColor from '../native-base-theme/variables/commonColor';

export default class Layout extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20, color: 'red' }} />
              </Button>
            </Left>
            <Body>
              <Title>
                Header
          </Title>
            </Body>
            <Right>
              <Icon name='add' />
            </Right>
          </Header>
          {this.props.children}
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}
