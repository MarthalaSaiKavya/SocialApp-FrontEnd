import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    // State management for form fields
    const [tweet, setTweet] = useState("");
    const [name, setName] = useState("");

    // Navigate hook to redirect after submission
    const navigate = useNavigate();

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const postData = { text: tweet, author: name }; // Prepare data to send

        // Make POST request
        axios.post("http://localhost:8080/create", postData)
            .then((response) => {
                console.log(response.data);
                navigate("/home"); // Redirect to home page after successful submission
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            <nav className="navbar navbar-light bg-light mb-4">
                <span className="navbar-brand mb-0 h1">Create a Post</span>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="tweet">Tweet</label>
                    <textarea
                        className="form-control"
                        id="tweet"
                        rows="3"
                        value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;

