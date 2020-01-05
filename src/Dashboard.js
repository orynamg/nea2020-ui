import React from 'react';
import NewsList from './News'

const Dashboard = () => {
    const [ready, setReady] = React.useState(false)
    const [news, setNews] = React.useState([])
    const [error, setError] = React.useState(null)

    const fetchData = async () => {
        try {
            //await sleep(2000);
            const response = await fetch("http://localhost:8000/news");
            const data = await response.json();
            // console.log(data);
            setReady(true);
            setNews(data);
        } catch (error) {
            setError(error);
        }
    };
    React.useEffect(() => { fetchData(); }, [])

    if (!ready) return <p>Loading...</p>
    if (error) return <p>Oops, something went wrong!</p>
    return <NewsList list={news} />
}

// function sleep(duration) {
//     return new Promise(resolve => setTimeout(resolve, duration));
// }

export default Dashboard;