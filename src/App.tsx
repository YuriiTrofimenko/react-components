import React from 'react'

const clickHandler = () => {
  alert('Click!')
}

function App() {
  const greetingString = 'Hell'
  return (
    <div>
      <p>{greetingString}o React</p>
      <Child/>
      <Child2/>
      <Child3/>
      <button onClick={clickHandler}>Button</button>
    </div>
  );
}

function Child () {
  return <span>I am a child component</span>
}

class Child2 extends React.Component {
  private clickHandler = () => {
    alert(this.greetingString + 'Click!')
  }
  private greetingString = 'Hell'
  render () {
    // temp const, vars, methods
    return (
        <>
          <ul>
            <li>UA</li>
            <li>RU</li>
            <li>EN</li>
          </ul>
          <button onClick={this.clickHandler}>Button</button>
        </>
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
