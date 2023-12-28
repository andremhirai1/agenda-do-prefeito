import { useState } from 'react';
import Calendar from './components/Calendar';
import './App.css';
import { Value } from './types';
import useApiCall from './hooks/useApiCall';
import { API_URL } from './config';
import { formatURL } from './utils';


function App() {
  const [value, onChange] = useState<Value>(new Date());
  const { data, error, loading } = useApiCall(formatURL(API_URL, value));

  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
      {data?.items.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  );
}
export default App;
