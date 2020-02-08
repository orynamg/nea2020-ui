import React from 'react';
import EventList from './Events'
import EventCloud from './EventCloud'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { useSharedState } from './utils'
import {activeCategorySubject} from './store'

const CategoryBar = ({active}) => {
    const [, setCat] = useSharedState(activeCategorySubject)
    console.log("active index is: " + active)

    const categories = ["all", "business", "entertainment", "health", "tech & sci", "environment", "lgbt", "youth"]
    // const variants = ["primary", "danger", "success", "secondary", "warning", "info", "dark", "light"]

    return (
        <Nav variant="tabs" onSelect={selectedKey => setCat(selectedKey)}>
            {categories.map((cat, i) => {
                return (
                    <Nav.Item key={i}>
                        <Nav.Link eventKey={i} active={i===active}>{cat}</Nav.Link>
                    </Nav.Item>                    
                )}
            )}
        </Nav>
    )
}

const Dashboard = () => {
    const [ready, setReady] = React.useState(false)
    const [news, setNews] = React.useState([])
    const [events, setEvents] = React.useState([])
    const [tweets, setTweets] = React.useState([])
    const [error, setError] = React.useState(null)

    const [cat, ] = useSharedState(activeCategorySubject)

    const fetchData = async () => {
        try {
            // await sleep(2000);

            const response = await fetch("http://localhost:8000/news?limit=1000");
            const data = await response.json();
            setNews(data);

            const eventsResponse = await fetch("http://localhost:8000/events?limit=1000");
            const eventsData = await eventsResponse.json();
            setEvents(eventsData);

            const tweetsResponse = await fetch("http://localhost:8000/tweets?limit=10000");
            const tweetsData = await tweetsResponse.json();
            setTweets(tweetsData);
            
            setReady(true);
        } catch (error) {
            setError(error);
        }
    };
    React.useEffect(() => { fetchData(); }, [])

    if (!ready) return <p>Loading...</p>
    if (error) return <p>Oops, something went wrong!</p>

    const hasActiveCategory = obj => cat == 0 || obj.category_id === cat - 1;
    const activeNews = news.filter(hasActiveCategory);
    const activeTweets = tweets.filter(hasActiveCategory);
    const activeEvents = events.filter(event => 
                                        activeNews.some(i => i.event_id === event.id) 
                                        || activeTweets.some(i => i.event_id === event.id));

    return (
        <div id="content">
            <div id="left">
                <div className="categoryBar"><CategoryBar active={cat}/></div>
                <EventCloud events={activeEvents}/>
            </div>
            <div id="right">
                <EventList events={activeEvents} news={activeNews} tweets={activeTweets}/>
            </div>
        </div>
    )
}

// function sleep(duration) {
//     return new Promise(resolve => setTimeout(resolve, duration));
// }

export default Dashboard;