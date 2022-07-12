import React from 'react';
import {View} from 'react-native';
import {Props} from './props';
import styles from './styles';

const Sample: React.FC<Props> = ({
  // props
  prop,
}) => {
  // use props here
  prop;

  return <View style={styles.container} />;
};

export default Sample;
