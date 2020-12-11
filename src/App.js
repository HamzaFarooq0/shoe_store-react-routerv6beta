import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Routers/Home';
import Launch from './components/Routers/Launch';
import LaunchIndex from './components/Routers/LaunchIndex';
import LaunchShoe from './components/Routers/LaunchShoe';

import './App.css'

function App() {
	return (
		<div className="App">
			<Router>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/launch">Launch</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="launch" element={<Launch />}>
						<Route path="/" element={<LaunchIndex />} />
						<Route path=":slug" element={<LaunchShoe />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
