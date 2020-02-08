import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { useSharedState } from './utils'
import {activeCategorySubject} from './store'

const EventCloud = ({events, news, tweets}) => {
    const [cat, setCat] = useSharedState(activeCategorySubject)
    const cloud = [];

    const hasActiveCategory = obj => cat == 0 || obj.category_id === cat - 1;
    const activeNews = news.filter(hasActiveCategory);
    const activeTweets = tweets.filter(hasActiveCategory);
    
    events
      .filter(event => activeNews.some(i => i.event_id === event.id) || activeTweets.some(i => i.event_id === event.id))
      .map(event => {
        const words = event.name.split(" ");
        words.map(word => {
          cloud.push({text: word, value: Math.floor(200/words.length + 50)})
        })  
      })
  
    const options = {
      rotations: 1,
      rotationAngles: [0]
    }
  
    return (
        // <div>Left Pane</div>
        // <div style={{ height: 600, width: 600 }}>
        <div className="cloud">
            <ReactWordcloud options={options} words={cloud} />
        </div>
    )
}
  
export default EventCloud;