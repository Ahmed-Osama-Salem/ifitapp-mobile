import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SelectPlaceholderProps} from './SelectPlaceholder';
import {Colors, Fonts} from '../../../utils/theme';

const ResetSelectionButton: React.FC<SelectPlaceholderProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{...Fonts.body, color: Colors.text.secondary}}>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetSelectionButton;
