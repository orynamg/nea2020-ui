import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const EventCloud = ({events}) => {
    const cloud = [];

    events.map(event => {
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
        <div className="cloud">
            <ReactWordcloud options={options} words={cloud} />
        </div>
    )
}
  
export default EventCloud;