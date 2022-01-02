import React from 'react';

import { NotFoundPage } from '../../components/application/NotFoundPage';
import { Title } from '../../components/foundation/Title';

/** @type {React.VFC} */
const NotFoundContainer = () => {
  return (
    <>
      <Title title={`ページが見つかりません - CAwitter`} />
      <NotFoundPage />
    </>
  );
};

export { NotFoundContainer };
