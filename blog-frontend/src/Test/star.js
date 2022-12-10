import React from 'react';
import {
    View,
} from 'react-native';
import TransparentStarGroupSvg from '../assets/images/transparentStarGroup.svg';

function Star(props) {
    return (
        <View>
            <View>
                <TransparentStarGroupSvg/>
            </View>
        </View>
    );
}

export default Star;