import "./style.css";
function fun() {
  document.getElementById("like_button").innerText = "You liked this.";
}
function App() {
  return (
    <>
      <h2>React Without Any Tooling</h2>
      <p>This page demonstrates using React with no build tooling.</p>
      <p>React is loaded as a script tag.</p>
      <div id="like_button">
        <button id="but" onClick={fun}>
          Blaze
        </button>
      </div>
    </>
  );
}

export default App;
