import Todo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
        <Todo text="study it" desc="keep studying"/>
        <Todo text="write it" desc="really write it out"/>
        <Todo text="build with it" desc="Build them projects"/>
    </div>
  );
}

export default App;
