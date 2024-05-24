import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SelectPlaceholderProps} from './SelectPlaceholder';

const ResetSelectionButton: React.FC<SelectPlaceholderProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetSelectionButton;
