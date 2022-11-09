const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function Profile(){
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
      />
    </>
  )
}


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
      <Profile />
    </div>
  );
}

//Conditional Rendering https://beta.reactjs.org/learn#conditional-rendering
