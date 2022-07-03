import React from 'react';
import Page from './components/Page';
import Detail from './components/Detail/Detail'
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';



function App() {
	return (
		<Routes>
			<Route path="/" element = {<Page/>}/>
			< Route path = "/post/:id"
			element = {
				< Detail / >
			}
			/>
		</Routes>
	);
}

export default App;
