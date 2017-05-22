import React from 'react';
import { TextInput, View, Dimensions } from 'react-native';

import Draggable from 'react-native-snap-drag';

const window = Dimensions.get('window');
const size = 30;

export default class EmojiPicker extends React.Component {
  render() {
    const { children, isVisible } = this.props;
    return (
      <View
        style={{
          flex: 1,
          overflow: 'hidden'
        }}
      >
        {children}
        {isVisible &&
          <Draggable
            xLocked
            key={'snap-text-picker'}
            style={{
              position: 'absolute',
              top: window.height / 2 - 100,
              left: 0
            }}
          >
            <TextInput
              autoFocus
              underlineColorAndroid="transparent"
              style={{
                textAlign: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: 'white',
                height: size,
                width: window.width,
                paddingVertical: 5
              }}
            />
          </Draggable>}
      </View>
    );
  }
}
