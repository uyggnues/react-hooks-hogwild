import React from "react";
import Nav from "./Nav";
import Hogs from './Hogs';
import hogs from "../porkers_data";


function App() {

	const hogList = hogs.map(hog => 
	<Hogs key={hogs.name} {...hog}
	/>)

	return (
		<div className="App">
			<Nav  />
			<Hogs />{hogList}
		</div>
	);
}

export default App;
