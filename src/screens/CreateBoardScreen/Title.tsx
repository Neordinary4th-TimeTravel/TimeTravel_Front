import {Text} from '@rneui/base';
import React from 'react';

interface TitleProps {
  title: string;
}

export default function Title({title}: TitleProps) {
  return (
    <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
      {title}
    </Text>
  );
}
