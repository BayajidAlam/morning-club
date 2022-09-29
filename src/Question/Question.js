import React from 'react';
import './Question.css'
const Question = () => {
  return (
    <div className='question-container'>
       <div className='question'>
        <h3>Question-1</h3>
        <h4 className='qtn'>How does react work?</h4>
        <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
      </div>

      <div className='question'>
        <h3>Question-2</h3>
        <h4 className='qtn'>Diffrence between props and state?</h4>
        <h5>Props</h5>
        <ul>
          <li>The Data is passed from one component to another.</li>
          <li>It is Immutable (cannot be modified).</li>
          <li>Props can be used with state and functional components.</li>
          <li>Props are read-only.</li>
        </ul>
        <h5>State</h5>
        <ul>
          <li>The Data is passed within the component only.</li>
          <li>It is Mutable ( can be modified).</li>
          <li> functional components.	State can be used only with the state components/class component</li>
          <li>State is both read and write.</li>
        </ul>

      </div>

      <div className='question'>
      <h3>Question-3</h3>
        <h4 className='qtn'>Use of useeffect without factching data from api?</h4>
        <p>Reading from local storage</p>
        <p>Registering and deregistering event listeners</p>
      </div>
    </div>
  );
};

export default Question;