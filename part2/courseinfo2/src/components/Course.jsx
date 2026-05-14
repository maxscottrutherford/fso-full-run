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

export default Course;