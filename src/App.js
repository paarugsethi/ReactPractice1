import styles from './App.module.css';
import Stopwatch from './Components/Stopwatch';

function App() {
  document.body.style = 'background: #E5EEF3;';
  return (
    <div className={styles.App}>
      <Stopwatch />
    </div>
  );
}

export default App;
