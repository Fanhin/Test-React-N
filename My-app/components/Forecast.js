import React from 'react'
import { StyleSheet, Text, View  } from 'react-native'


export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.textPadding} >
                <Text>{this.props.main}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.temp}</Text>
                <Text>°C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding:0
    },
    textPadding:{
      padding:25
    },
    backdrop:{
      width:'100%',height:'100%'
    }
  });
