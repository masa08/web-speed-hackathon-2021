import React from 'react';

const Time = ({ time }) => {
  const date = new Date(Date.parse(time));
  const ISOString = date.toISOString();

  return <time dateTime={ISOString}>{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</time>;
};

export { Time };
