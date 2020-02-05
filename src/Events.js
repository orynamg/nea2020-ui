import React from 'react';
import NewsList from './News'
import TweetList from './Tweets'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Event = ({event, news, tweets}) => {  
  return (
    <Jumbotron>
    {/* <div className="event"> */}
        <h2>{capitalise(event.name)}</h2>
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

function capitalise(s) {
  const words = s.split(" ")
  const capWords = words.map(word => {
     return word[0].toUpperCase() + word.slice(1)
  })
  return capWords.join(" ")
}

export default EventList;