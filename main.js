import Exponent from 'exponent';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Container, Content, Header, Title} from 'native-base';
import WeatherContainer from './app/components/weather/container';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'red'}}>
                    <Title>Weather</Title>
                </Header>

                <Content>
                    <WeatherContainer/>
                </Content>
            </Container>
        );
    }
}

Exponent.registerRootComponent(App);
