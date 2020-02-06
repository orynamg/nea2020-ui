import React from 'react';
// import NewsList from './News'
import EventList from './Events'
import EventCloud from './EventCloud'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
// import { BehaviorSubject } from 'rxjs'

// const activeCategorySubject = new BehaviorSubject(0);

// const useSharedState = subject => {
//     const [value, setState] = useState(subject.getValue());
//     useEffect(() => {
//       const sub = subject.pipe(skip(1)).subscribe(s => setState(s));
//       return () => sub.unsubscribe();
//     });
//     const newSetState = state => subject.next(state);
//     return [value, newSetState];   
// };

const CategoryBar = ({active}) => {
    // const [cat, setCat] = useSharedState(activeCategorySubject)
    const setCat = cat => console.log("set active index to" + cat)
    console.log("active index is: " + active)

    const categories = ["all", "business", "entertainment", "health", "tech & sci", "environment", "lgbt", "youth"]
    const variants = ["primary", "danger", "success", "secondary", "warning", "info", "dark", "light"]

    return (
        <Nav variant="tabs" onSelect={selectedKey => setCat(selectedKey)}>
            {categories.map((cat, i) => {
                return (
                    <Nav.Item>
                        <Nav.Link eventKey={i} active={i==active}>{cat}</Nav.Link>
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

    // const [cat, setCat] = useSharedState(activeCategorySubject)
    const cat = 0

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
                <div className="categoryBar"><CategoryBar active={cat}/></div>
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