import React from 'react';

function App() {
  const greetingString = 'Hell'
  return (
    <div>
      <p>{greetingString}o React</p>
      <Child/>
      <Child2/>
      <Child3/>
    </div>
  );
}

function Child () {
  return <span>I am a child component</span>
}

class Child2 extends React.Component {
  render () {
    return (
      <ul>
        <li>UA</li>
        <li>RU</li>
        <li>EN</li>
      </ul>
    )
  }
}

/*function Child3 () {
  return (
      <div>
        <span>span1</span><span>span2</span>
      </div>
  )
}*/

function Child3 () {
  return (
      <>
        <span>span1</span><span>span2</span>
      </>
  )
}

export default App;
