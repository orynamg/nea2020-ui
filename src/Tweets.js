import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Tweet = ({tweet}) => (
    <div className="tweet">
        <span>
          <FontAwesomeIcon icon={faTwitter} color="rgb(73, 161, 235)" />
          <small>
            @{tweet.user}
            <em> says on {(new Date(tweet.published_at)).toLocaleDateString()}:</em>
          </small>
        </span>
        <p>
          <a href={tweet.url}>
            {tweet.text}
            {/* <FontAwesomeIcon icon={faExternalLinkAlt} color="LightGray"/> */}
          </a>
        </p>
        {/* <div>{tweet.hashtags}</div> */}
        {/* <div>{tweet.category_id}</div> */}
        {/* <div>{tweet.event_id}</div> */}
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