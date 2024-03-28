import './App.css';
import AppLayout from './Components/AppLayout';
import AppThemeProvider from './Components/AppThemeProvider';

function App() {
  return (
    <AppThemeProvider>
      <div className="App">
        <AppLayout/>
      </div>
    </AppThemeProvider>
    
  );
}

export default App;
