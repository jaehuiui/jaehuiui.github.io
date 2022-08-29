import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import HotjarTest from './HotjarTest'

function App() {
  return (
    <main>
        <header>이름 모를 헤더</header>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hotjar-test" element={<HotjarTest/>} />
        </Routes>
   </main>
  );
}

export default App;
