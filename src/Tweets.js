import React from 'react';

const Tweet = ({tweet}) => (
    <div className="tweet">
        <div>{tweet.text}</div>
        <div>{tweet.hashtags}</div>
        <div>{tweet.user}</div>
        <a href={tweet.url}>link</a>
        <div>{tweet.published_at}</div>
        <div>{tweet.category_id}</div>
        <div>{tweet.event_id}</div>
    </div>
)

const TweetList = ({list}) => (
    <ul>
      {list.map(item => (
        <Tweet key={item.id} tweet={item} />
      ))}
    </ul>
  );

export default TweetList;