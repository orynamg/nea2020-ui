import React from 'react';
import NewsList from './News'
import TweetList from './Tweets'

const Event = ({event, news, tweets}) =>(
    <div className="event">
        <div>{event.name}</div>
        <div>{event.keywords}</div>
        <div>{event.created_at}</div>
        <NewsList list={news} />
        <TweetList list={tweets} />
    </div>
)

const EventList = ({list, news, tweets}) => (
    <ul>
      {list.map(item => { 
        const eventNews = news.filter(n => n.event_id === item.id);
        const eventTweets = tweets.filter(i => i.event_id === item.id);
        return (
          <Event key={item.id} event={item} news={eventNews} tweets={eventTweets}/>
        )}
      )}
    </ul>
)

export default EventList;