import React from 'react';

import { InfiniteScroll } from '../../components/foundation/InfiniteScroll';
import { Title } from '../../components/foundation/Title';
import { TimelinePage } from '../../components/timeline/TimelinePage';
import { useInfiniteFetch } from '../../hooks/use_infinite_fetch';
import { fetchJSON } from '../../utils/fetchers';

/** @type {React.VFC} */
const TimelineContainer = () => {
  const { data: posts, fetchMore } = useInfiniteFetch('/api/v1/posts', fetchJSON);

  return (
    <InfiniteScroll fetchMore={fetchMore} items={posts}>
      <Title title={`タイムライン - CAwitter`} />
      <TimelinePage timeline={posts} />
    </InfiniteScroll>
  );
};

export { TimelineContainer };
