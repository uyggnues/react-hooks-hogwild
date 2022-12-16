import React from "react";
import Nav from "./Nav";
import Hog from './Hog';
import hogs from "../porkers_data";
import Filter from "./Filter"
import {useState} from "react"


function App() {
	// debugger
	
	const [queryHog, setQueryHog] = useState("All")


	
	const filteredHog = hogs.filter(hog => queryHog === "All" || String(hog.greased) === queryHog )
	
	const hogList = filteredHog.map(hog => 
		<Hog key={hog.name} {...hog}
	/>)

	return (
		<div className="App">
			<Nav />
			<Filter queryHog={queryHog} setQueryHog={setQueryHog}/>
			{hogList}
		</div>
	);
}

export default App;
