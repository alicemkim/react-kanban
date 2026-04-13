import './App.css';
import { KanbanBoard } from './components';

function App() {
  return (
    <div className='flex flex-col items-center p-4'>
      <header className='items-center'>
        <h2>Kanban Board</h2>
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
