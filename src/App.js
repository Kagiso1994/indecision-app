import React, { Component } from 'react';
class App extends Component {

  state = {
    alphaValue: 'Oh yes, data from Alpha!',
    counter: 1,
    app: {
      title: "Indecision App",
      subtitle: "This is some info",
      options: []
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    console.log(this.state.counter);

    let copyCounter = this.state.counter;
    let copyApp = this.state.app;
    copyCounter += 1;
    const option = e.target.elements.option.value;

    if (option) {
      copyApp.options.push(option);
      e.target.elements.option.value = '';
    }

    this.setState({
      counter: copyCounter,
      app: copyApp
    })
  }

  getOptions = (options) => {
    if (options.length > 0) {
      return (
        <ol>
          {options.map((option) => <li key={option}>{option}</li>)}
        </ol>
      );
    }
    return undefined;
  }


  render() {
    return (
      <div className="App">
      {/*<h1>{this.state.counter}</h1>
        <Welcome name="Kagiso" />
        <Comment  date={comment.date} text={comment.text} author={comment.author}/>*/}
        <h1>{this.state.app.title ? this.state.app.title : "Annonymous"}</h1>
        {this.state.app.subtitle && <p>{this.state.app.subtitle}</p>}

        <p>{this.state.app.options.length > 0 ? "Here are your options" : "No options"}</p>
        {this.getOptions(this.state.app.options)}

        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }


  /* 
  
   let app = {
       title: "Indecision App",
       subtitle: "This is some info",
       options: ["One", "Two"]
     };
 
  getOptions(options) {
 
     if (options.length > 0) {
       return (
         <ol>
           {options.map((option) => <li key={option}>{option}</li>)}
         </ol>
       );
     } t7
 
     return undefined;
   }
 
   onFormSubmit = (e) => {
     e.preventDefault();
 
     const option = e.target.elements.option.value;
 
     if (option) {
       app.options.push(option);
       e.target.elements.option.value = '';
 
     }
     console.log(app.options);
   }*/

  /*function formatDate(date) {
    return date.toLocaleDateString();
  }*/



  /*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }*/

  /*function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }*/

  /*const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };*/

  /*function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }*/

  //Comment receives author (an object), text (a string), and date (a date) as props
  /*function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
      </div>
    );
  }*/


}



export default App;
