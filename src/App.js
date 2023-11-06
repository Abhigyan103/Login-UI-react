import './App.css';

function App() {
  return (
    <body>
      <Form>Hello</Form>
    </body>
  );
}
function Form(props) {
  return <form>
  <h1>Login</h1>
  <label htmlFor="femail">Enter Your details</label>
  <input type="email" className="email" placeholder='Email'/>
  <input type="password" className="password" placeholder='Password'/>
  <button type="button" >Login</button>
  <div className="col">
  {["blue","deepskyblue","red"].map((e)=>{
    return <Circle color={e} />;
  })}
  </div>
  <span>or Sign Up using</span>
  <input type="button" value="Sign Up" />
</form>
}

function Circle(props) {
  return (
    <div style={{height:"30px",width:"30px",borderRadius:"50%",background:props.color}}></div>
  );
}

export default App;
