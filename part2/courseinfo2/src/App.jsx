const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({parts}) => {
  console.log(parts);
  return (
    <div>
      {
        parts.map(part => 
          <Part key={part.id} part={part.name} exercises={part.exercises}></Part>
        )
      }
      {/* <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} /> */}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises: {
        parts.reduce((acc, curr) => acc + curr.exercises, 0)
      }
    </p>
  );
};

const Course = ({ course }) => {
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Grabbing data from a server",
          exercises: 8,
          id: 4
        }
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 8,
          id: 2
        }
      ]
    }
  ]

  return courses.map(course =>
    <Course key={course.id} course={course} />
  )
};

export default App;
