import React from 'react';
import NewsList from './News'
import TweetList from './Tweets'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Event = ({event, news, tweets}) => {  
  return (
    <Jumbotron>
    {/* <div className="event"> */}
        <h2>{event.name}</h2>
        {/* <div>{event.keywords}</div> */}
        <small><em>{event.created_at}</em></small>
        <NewsList list={news} />
        <TweetList list={tweets} />
    {/* </div> */}
    </Jumbotron>
)}

const EventList = ({events, news, tweets}) => (
  <ul>
    {events.map(item => { 
      const eventNews = news.filter(n => n.event_id === item.id);
      const eventTweets = tweets.filter(i => i.event_id === item.id);
      return (
        <Event key={item.id} event={item} news={eventNews} tweets={eventTweets}/>
      )}
    )}
  </ul>
)

export default EventList;