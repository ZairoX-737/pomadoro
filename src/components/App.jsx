import React, { useState } from 'react';
import '../App.css';

import Header from './Header';
import TimerBox from './TimerBox';
import Footer from './Footer'

function App() {
  const [tasks, setTasks] = useState([])

  return (
      <section className="wrapper">
        <Header />
        <TimerBox />
        <Footer tasks={tasks} setTasks={setTasks} />
      </section>
  );
}

export default App;
