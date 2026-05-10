const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a + b)
  const name = "Peter";
  const age = 28;
  const friends = [
    { name: "Jeff", age: 26 },
    { name: "Harold", age: 29 },
  ];
  const friendNames = ["Maya", "Jane"];
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Max" age={24} />
      <Hello name={name} age={age} />
      <p>
        My friend {friends[0].name} is {friends[0].age}
      </p>
      <p>
        My friend {friends[1].name} is {friends[1].age}
      </p>
      <p>{friendNames.join(", ")}</p>
    </div>
  );
};

const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second);
console.log(rest);

const object1 = {
  name: "Max Rutherford",
  age: 25,
  'secret num': 1234
};

object1["secret number"] = 12334;

console.log(object1);

// const t = [1, -1, 3]
// const m1 = t.map(value => value * 2)
// console.log(t)
// console.log(m1)
// const t2 = t.concat(5)
// console.log(t)
// console.log(t2)
// t.push(5)
// console.log(t.length)
// console.log(t[1])
// t.forEach(value => {
//   console.log(value)
// })

export default App;
