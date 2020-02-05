import React from 'react';
// import NewsList from './News'
import EventList from './Events'
import EventCloud from './EventCloud'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dashboard = () => {
    const [ready, setReady] = React.useState(false)
    const [news, setNews] = React.useState([])
    const [events, setEvents] = React.useState([])
    const [tweets, setTweets] = React.useState([])
    const [error, setError] = React.useState(null)

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

    return (

        <div id="content">
            <div id="left">
                <EventCloud events={events} />
            </div>
            <div id="right">
                <EventList events={events} news={news} tweets={tweets}/>
            </div>
        </div>
        
    )
}

function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

export default Dashboard;