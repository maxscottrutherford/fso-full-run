const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a + b)
  const name = 'Peter'
  const age = 28
  const friends = [
    { name: 'Jeff', age: 26 },
    { name: 'Harold', age: 29 }
  ]
  const friendNames = ['Maya', 'Jane']
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Max' age={24}/>
      <Hello name={name} age={age}/>
      <p>My friend {friends[0].name} is {friends[0].age}</p>
      <p>My friend {friends[1].name} is {friends[1].age}</p>
      <p>{friendNames.join(', ')}</p>
    </div>
  )
}

export default App