import React from 'react';

const News = ({news}) => (
    <div>
        <div>{news.headline}</div>
        <div>{news.source}</div>
        <a href={news.url}>link</a>
        <div>{news.created_at}</div>
    </div>
)

const NewsList = ({list}) => (
    <ul>
      {list.map(item => (
        <News key={item.id} news={item} />
      ))}
    </ul>
  );

export default NewsList;