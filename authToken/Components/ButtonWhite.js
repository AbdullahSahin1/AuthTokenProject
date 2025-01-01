import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const ButtonWhite = ({children}) => {
    return (
        <View>
            <Text>
            {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ButtonWhite;
