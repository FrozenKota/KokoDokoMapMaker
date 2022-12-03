import React from 'react';
import { View } from 'react-native';
import { SpeedDial, Icon } from '@rneui/themed';

type SpeedDialType = {
    size: 'small' | 'large' | undefined,
    placement: 'right' | 'left' | undefined,
    icon:
    {
        name: string | undefined,
        color: string | undefined,
    },
    openIcon: {
        name: string | undefined,
        color: string | undefined,
    },
    Actions: Array<{
        icon: {
            name: string | undefined,
            color: string | undefined,
        },
        title: string,
        onPress: () => void,
    }>
}

const ISpeedDial = (props: SpeedDialType) => {
    const [open, setOpen] = React.useState(false);

    return (
        <SpeedDial
            size={props.size}
            placement={props.placement ? props.placement : 'right'}
            isOpen={open}
            icon={{
                name: props.icon.name ? props.icon.name : 'edit',
                color: props.icon.color ? props.icon.color : '#fff'
            }}
            openIcon={{
                name: props.openIcon.name ? props.openIcon.name : 'close',
                color: props.openIcon.color ? props.openIcon.name : '#fff'
            }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
        >
            {props.Actions.map((val, i) => (
                <SpeedDial.Action
                    key={i}
                    icon={props.Actions[i].icon}
                    title={props.Actions[i].title}
                    onPress={() => { props.Actions[i].onPress() }}
                />
            ))}
        </SpeedDial>
    );
};

export default ISpeedDial;