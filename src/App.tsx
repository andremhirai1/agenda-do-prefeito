import { useState } from 'react';
import Calendar from './components/Calendar';
import Schedule from './components/Schedule';
import './App.css';
import { Value } from './types';
import useApiCall from './hooks/useApiCall';
import { API_URL } from './config';
import { formatURL } from './utils';


function App() {
  const [value, onChange] = useState<Value>(new Date());
  const { data, error, loading } = useApiCall(formatURL(API_URL, value));

  return (
    <div className="psp-calendar-app">
      <Schedule date={value} items={data?.items || []} />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default App;
