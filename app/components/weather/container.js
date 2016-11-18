import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Spinner} from 'native-base';
import FetchWeather from './model';

export default class WeatherContainer extends React.Component {
    state = {
        loaded: false
    };

    constructor() {
        super();
        this.getWeather();
    }

    getWeather() {
        FetchWeather('London')
            .then(response => {
                response.loaded = true;
                this.setState(response);
            });
    }

    render() {
        if (!this.state.loaded) {
            return <Spinner color='blue'/>;
        }

        return (
            <View>
                <Text style={{fontSize: 45}}>{this.state.name}</Text>
                <Text style={{fontSize: 35}}>{this.state.main.temp.toFixed(1)} &deg;C</Text>
                <Text style={{fontSize: 15}}>{this.state.weather[0].main}</Text>
            </View>


        );
    }
}