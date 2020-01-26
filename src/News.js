import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const News = ({news}) => (
    // <Jumbotron>
    // {/* <div className="item"> */}
    //     <div>{news.headline}</div>
    //     <div>{news.source}</div>
    //     <a href={news.url}>link</a>
    //     <div>{news.created_at}</div>
    //     <div>{news.category_id}</div>
    //     <div>{news.event_id}</div>
    // {/* </div> */}
    // </Jumbotron>

    <Card style={{ width: '30rem' }}>
    <Card.Body>
        <Card.Title>
            <div style={{textAlign:"right"}}>
                <Badge pill variant="success">business</Badge>
            </div>
            {/* {news.source} */}
        </Card.Title>
        {/* <Card.Text>
            {news.headline}
        </Card.Text>
        <Button variant="primary">Open news</Button> */}
        <blockquote className="blockquote mb-0">
            <p>
                <a href={news.url}>{news.headline}</a>
            </p>
            <footer className="blockquote-footer">
                {news.source} on <cite title="Source Title">
                    {(new Date(news.created_at)).toLocaleDateString()}
                </cite>
            </footer>
        </blockquote>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Category: </small>
      <Badge pill variant="success">business</Badge>
    </Card.Footer> */}
    </Card>
)

const NewsList = ({list}) => (
    <ul>
      {list.map(item => (
        <News key={item.id} news={item} />
      ))}
    </ul>
  );

export default NewsList;