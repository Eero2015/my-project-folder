
function Samplepage() { 
	return(
		<div>
			<img src="react-logo.png" width="40px"/>
			<h1>FUN FACTS ABOUT REACT</h1>
		<ul>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100k stars on Github</li>
			<li>it is maintained by Facebook</li>
			<li>Powers thousands of enterprise apps, including mobile apps</li>
		</ul>
		</div>)
}

ReactDOM.render(Samplepage(),document.querySelector("#root"));