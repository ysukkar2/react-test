// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Nine } from './assets/nine.svg';
import { ReactComponent as Seven } from './assets/seven.svg';
import { ReactComponent as Eight } from './assets/eight.svg';
import { ReactComponent as Two } from './assets/two.svg';
import { ReactComponent as Six } from './assets/six.svg';
import { ReactComponent as Ten } from './assets/ten.svg';
import { ReactComponent as One } from './assets/one.svg';
import { ReactComponent as Four } from './assets/four.svg';
import { ReactComponent as Five } from './assets/five.svg';




const mystyle = {
	
	
	
	padding: "50px",
	fontFamily: "Arial",
	marginBottom:"200",
	
	
	
  };
//   const submit = {
// 	marginRight:"800px",


//   };
  


  <select>
  <option value="task1">Task1</option>
  <option value="task2">Task2</option>
  <option selected value="task3">Task3</option>
  <option value="task4">Task4</option>
</select>


class FlavorForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: 'task3'};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
  
	handleSubmit(event) {
	  alert('Your favorite task is: ' + this.state.value);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Pick your favorite task:
			<select value={this.state.value} onChange={this.handleChange}>
			  <option value="task1">Task1</option>
			  <option value="task2">Task2</option>
			  <option value="task3">Task3</option>
			  <option value="task4">Task4</option>
			</select>
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	  );
	}
  }
  

//   class MyForm extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		mytask: 'task2'
// 	  };
// 	}
// 	render() {
// 	  return (
// 		<form>
// 		<select value={this.state.mytask}>
// 		  <option value="task1">task1</option>
// 		  <option value="task2">task2</option>
// 		  <option value="task3">task3</option>
// 		</select>
// 		</form>
// 	  );
// 	}
//   }



//   const  logostyle = {
// 	  paddingTop:"50px",
	  
//   }
//   const welcome = {
// 	marginLeft:"500px",
// 	marginBottom:"500px",
// 	//marginBottom:"800px",
	
// 	padding:"50px",
	
//   };
function App() {

	

	
			
		
			
	

	
return (

  
	
	
	<Router>
		<Logo  />
	
		
		
	<Navbar />

	<Nine />

	<Seven style={mystyle}  />

	<Eight style={{marginLeft:"300px"}} />
	<Two  style={{marginLeft:"1000px"}}/>
	<h3 style={{marginLeft:"300px",justifyContent:"center"}}>How it works</h3>


	<Six />
	<Ten style={{marginLeft:"300px"}} />

	<h2 style={{marginLeft:"500px"}}>Welcome to hiss</h2>
	<p style={{marginLeft:"500px"}}>online platform</p>
	
	
	<FlavorForm  />


	
	<Four style={{marginBottom:"0.6px"}} />

	<Five style={{marginLeft:"200px"}} />
	
	<One style={{marginLeft:"1200px",marginBottom:"0.20px"}} />

	

	
	
	
  
	



	
	
	<Switch>
		
		
		<Route path='/' exact component={Home} />
		
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
        
}



export default App;

