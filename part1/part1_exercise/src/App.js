const Header = (props) => {
  return (
    <>
      <h1> {props.course}</h1>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <p> {props.part} {props.exercises}</p>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let sumLocal = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

  return (
    <>
      <Header course={course.name} />
      {/* <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name}
        exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} /> */}

      <Content parts = {course.parts}/>
      <Total sum={sumLocal}/>
    </>
  )
}

export default App