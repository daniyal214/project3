import React from 'react';
import './Hello.css';

function Hello({firstname}) {
  return <p className="myname">Hello!! {firstname}
  
        <h1 id="top"> Welcome to Basic React App</h1>
		<p> My Name is  <i> <b> MUHAMMAD DANIYAL </b> </i></p>
		<h3> 3<sup>rd</sup> Assignment</h3>
		


		<p> Cloud Native is the part of program <abbr title="Presidential Initiative for Artificial Intelligence and Computing"> PIAIC </abbr></p>
		<address>
		<p><a target="_blank "href="mailto:daniyal.hashmi2010@yahoo.com">daniyal.hashmi2010@yahoo.com</a></p>
		<p><abbr title="Addres"> Add </abbr>:65/63 Riaz uz zohra Society Malir Halt Karachi</p>
		</address>
		
		<h2>Steps to follow while deploying</h2>
		<ol>
		<li> Install Node.JS </li>
		<li> Install Yarn</li>
		<li> Build React App</li>
		<li> Install Surge</li>
        <li> Deploy to Surge</li>
		</ol>

		<h2> <abbr title="Presidential Initiative for Artificial Intelligence and Computing"> PIAIC </abbr>" Courses</h2>
		<ul>
		<li> <abbr title="Cloud Native and Computing"> CNC</abbr> </li>
		<li> <abbr title="Internet of Things"> IOT</abbr> </li>
		<li> <abbr title="Artificial Intelligence and Computing"> AIC</abbr> </li>
		<li> <abbr title="Block Chain and Computing"> BCC</abbr> </li>
		</ul>
		

		<h2> Information</h2>
		<ol>
		<li> Muhammad Daniyal </li>
			<ul> Contact
				<li> Email Address: <a target="_blank "href="mailto:daniyal.hashmi2010@yahoo.com">daniyal.hashmi2010@yahoo.com</a></li>
				<li> Home <abbr title="Addres"> Add </abbr>:65/63 Riaz uz zohra Society Malir Halt Karachi</li>
			</ul>
		
		</ol>
		
		<p> <a href="#top"> Back to the Top </a></p>

		<img src="pinkrose.jpg" alt="My Pic" height="100" width="100"/>
		
  </p>
}

export default Hello;
