import { useState } from "react";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

let isLoggedIn = true;

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
    </>
  );
}

function Greeting({ name }) {
  return <h1>Welcome to my app, {name}</h1>;
}

function MyButton() {
  const [count, setCount] = useState(0);
  // Responding to Events
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="button" onClick={handleClick}>
      Click {count} times
    </button>
  );
}

export default function App() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <Greeting name="World" />
      <MyButton />
      <MyButton />

      {/*Conditional Rendering */}
      {isLoggedIn ? <Profile /> : undefined}
      {!isLoggedIn && <Profile />}

      {/* Rendering Lists */}
      <ul>{listItems}</ul>
    </div>
  );
}
