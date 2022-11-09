function Greeting({ name }) {
  return <h1>Welcome to my app, {name}</h1>;
}

function MyButton() {
  return <button className="button">I'm a button</button>;
}

export default function App() {
  return (
    <div>
      <Greeting name="World" />
      <MyButton />
    </div>
  );
}

//Displaying data da kaldık. https://beta.reactjs.org/learn#displaying-data
