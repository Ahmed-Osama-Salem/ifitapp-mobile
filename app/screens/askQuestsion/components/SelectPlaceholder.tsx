import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PlusIcon} from '../../../modules/SvgIcons';

export interface SelectPlaceholderProps {
  onPress: () => void;
}

const SelectPlaceholder: React.FC<SelectPlaceholderProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PlusIcon />
    </TouchableOpacity>
  );
};

export default SelectPlaceholder;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#E1E2E6FC',
    height: 55,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
