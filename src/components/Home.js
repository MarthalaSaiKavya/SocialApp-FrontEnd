import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get('http://localhost:8080/home'); // Replace with your API endpoint
                
                if (response.data && response.data.length > 0) {
                    setTweets(response.data.map(tweetData => ({
                        text: tweetData.text || 'No tweet available',
                        author: tweetData.author || 'Unknown author'
                    })));
                } else {
                    setTweets([]);
                }
            } catch (error) {
                console.error('Error fetching the tweets:', error);
                setTweets([]);
            }
        };

        fetchTweets();
    }, []);

    const handleAuthorClick = async (authorName) => {
        try {
            const response = await axios.get(`http://localhost:8080/tweets/${authorName}`); // Replace with your API endpoint

            if (response.data && response.data.length > 0) {
                setTweets(response.data.map(tweetData => ({
                    text: tweetData.text || 'No tweet available',
                    author: tweetData.author || 'Unknown author'
                })));
            } else {
                setTweets([]);
            }
        } catch (error) {
            console.error('Error fetching tweets by author:', error);
            setTweets([]);
        }
    };

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Home</span>
            </nav>
            
            {tweets.map((tweet, index) => (
                <div key={index} className="card mt-3">
                    <div className="card-header">
                        Tweet
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{tweet.text}</p>
                            <footer className="blockquote-footer" onClick={() => handleAuthorClick(tweet.author)}>
                                {tweet.author}
                            </footer>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;


