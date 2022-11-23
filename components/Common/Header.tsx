import React from 'react';
import { View, Text } from 'react-native';

type Props = {
    title: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
};


const Header: React.FC<Props> = props => {
    const { title, left, right } = props;
    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View style={{ flex: 0.25 }}>{left}</View>
            <Text
                style={{
                    flex: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                }}>
                {title ?? ''}
            </Text>
            <View style={{ flex: 0.25 }}>{right}</View>
        </View>
    );
};

export default Header;
