import React from 'react';
import CreateSelector from './CreateSelector';

export default function () {
  return (
    <>
      <CreateSelector
        title="어떤 년도와 관련된 캡슐인가요?"
        list={['1980', '1990', '2000']}
      />
      <CreateSelector
        title="어떤 내용으로 만드시나요?"
        list={['음악', '패션', '패션', '패션', '패션']}
      />
    </>
  );
}
