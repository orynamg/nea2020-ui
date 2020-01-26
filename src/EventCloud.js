import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const EventCloud = ({events}) => {
  
    const cloud = [];
    
    events.map(event => {
      const words = event.name.split(" ");
      words.map(word => {
        cloud.push({text: word, value: Math.floor(100/words.length)})
      })  
    })
  
    const options = {
      rotations: 1,
      rotationAngles: [0]
    }
  
    return (
        <div style={{ height: 600, width: 900 }}>
            <ReactWordcloud options={options} words={cloud} />
        </div>
    )
}
  
export default EventCloud;