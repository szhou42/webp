import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    response: ''
  };
  
  constructor(props) {
    super(props);
    this.state = {
      email: 'uofiszhou42@gmail.com',
      netid: 'szhou42',
      password: 'aaaaa',
      courseNumber: '111',
      crn1: '222',
      crn2: '333',
      crn3: '444'
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
/*
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(':5000/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
*/
  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let jsonObject = {};
    for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
    }

    const data = JSON.stringify(jsonObject);
    console.log('post data:')
    console.log(data);

    fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">隐蔽的刷课小网站</h1>
        </header>

        <div className="formCenter"> 
          <p className="App-intro">填写刷课信息</p>
          <form onSubmit={this.handleSubmit}>
            <label className="h"> email: </label>
            <input type="email" name="email" value = {this.state.email} onChange={this.handleChange} required/>
            <br />
            <br />
            <label className="h"> netid: </label>
            <input type="text" name="netid" value = {this.state.netid} onChange={this.handleChange} required/>
            <br />
            <br />
            <label className="h"> password: </label>
            <input type="text" name="password" value = {this.state.password} onChange={this.handleChange} required/>
            <br />
            <br />
            <label className="h"> course number: </label>
            <input type="text" name="courseNumber" value = {this.state.courseNumber} onChange={this.handleChange} required/>
            <br />
            <br />
            <label className="h"> CRN 1: </label>
            <input type="text" pattern="[0-9]+" name="crn1" value = {this.state.crn1} onChange={this.handleChange} required/>
            <br />
            <br />
            <label className="h"> CRN 2: </label>
            <input type="text" pattern="[0-9]+" name="crn2" value = {this.state.crn2} onChange={this.handleChange} />
            <br />
            <br />
            <label className="h"> CRN 3: </label>
            <input type="text" pattern="[0-9]+" name="crn3" value = {this.state.crn3} onChange={this.handleChange} />
	    <br/>
            <br/>
            <input type="submit" value="Submit" />
            <p> {this.state.response} </p>


          </form>
        </div>
      </div>
    );
  }
}

export default App;
