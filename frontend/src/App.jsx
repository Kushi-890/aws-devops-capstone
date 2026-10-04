import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

        fetch(`${API_URL}/api/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                return response.json();
            })
            .then((data) => {
                setUsers(data.users);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Unable to connect to the backend API.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="app">
            <header className="header">
                <div>
                    <h1>AWS DevOps Capstone</h1>
                    <p>End-to-End Cloud & DevOps Application</p>
                </div>

                <span className="status">● Application Online</span>
            </header>

            <main className="container">
                <section className="hero">
                    <h2>3-Tier Web Application</h2>

                    <p>
                        A full-stack application built with React, Node.js,
                        PostgreSQL, Docker, Kubernetes, CI/CD, Terraform and AWS.
                    </p>
                </section>

                <section className="architecture">
                    <h2>Application Architecture</h2>

                    <div className="architecture-grid">
                        <div className="card">
                            <h3>Frontend</h3>
                            <p>React + Vite</p>
                        </div>

                        <div className="arrow">→</div>

                        <div className="card">
                            <h3>Backend</h3>
                            <p>Node.js + Express</p>
                        </div>

                        <div className="arrow">→</div>

                        <div className="card">
                            <h3>Database</h3>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </section>

                <section className="users">
                    <h2>Users from PostgreSQL</h2>

                    {loading && <p>Loading users...</p>}

                    {error && <p className="error">{error}</p>}

                    {!loading && !error && users.length === 0 && (
                        <p>No users found.</p>
                    )}

                    {!loading && !error && users.length > 0 && (
                        <div className="user-list">
                            {users.map((user) => (
                                <div className="user-card" key={user.id}>
                                    <h3>{user.name}</h3>
                                    <p>{user.email}</p>
                                    <small>
                                        User ID: {user.id}
                                    </small>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <footer>
                <p>AWS DevOps Capstone Project</p>
            </footer>
        </div>
    );
}

export default App;