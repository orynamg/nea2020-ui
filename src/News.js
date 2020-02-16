import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Popover from "react-bootstrap/Popover"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Overlay from "react-bootstrap/Overlay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const CategoryBadge = ({categoryId}) => {
    const categories = ["business", "entertainment", "health", "tech & science", "environment", "lgbt", "youth"]
    const variants = ["primary", "danger", "success", "secondary", "warning", "info", "dark", "light"]
    return (<Badge pill variant={variants[categoryId]}>{categories[categoryId]}</Badge>)
}

const News = ({news}) => {
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);
  
    const handleClick = event => {
      setShow(!show);
      setTarget(event.target);
    };
    
    return (
        <Card style={{ width: "30rem" }}>
            <Card.Body>
                <Card.Title>
                    <div style={{textAlign:"right"}}>
                        <CategoryBadge categoryId={news.category_id}></CategoryBadge>
                    </div>
                </Card.Title>
                <blockquote className="blockquote mb-0" onClick={handleClick}>
                    <p>
                        <a href={news.url}>{news.headline}</a>
                        {/* <FontAwesomeIcon icon={faFileAlt} color="gray" onClick={handleClick} /> */}
                    </p>
                    <footer className="blockquote-footer">
                        {news.source} on <cite title="Source Title">
                            {(new Date(news.created_at)).toLocaleDateString()}
                        </cite>
                    </footer>
                </blockquote>

                <Overlay
                    show={show}
                    target={target}
                    placement="left"
                    container={ref.current}
                    containerPadding={20}
                    rootClose
                >
                    <Popover id="popover-contained">
                        <Popover.Title as="h3">Summary</Popover.Title>
                        <Popover.Content>
                            {news.summary}
                        </Popover.Content>
                    </Popover>
                </Overlay>

            </Card.Body>
            {/* <Card.Footer>
                <FontAwesomeIcon icon={faFileAlt} color="gray" onClick={handleClick} />
                <Button variant="Secondary" onClick={handleClick}>Summary</Button>
            </Card.Footer> */}
        </Card>
    )
}

const NewsList = ({list}) => (
    <ul>
      {list.map(item => (
        <div className="newsItem"><News key={item.id} news={item} /></div>
      ))}
    </ul>
)

export default NewsList;