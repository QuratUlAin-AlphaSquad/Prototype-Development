// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Heading from './components/Heading';
import Content from './components/Content';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container bg-zinc-400 mx-auto'>

        <Header />
        <Sidebar />
        <Heading />
        {/* <Content /> */}
      {/* <p>Categories</p>
      <Button variant="contained">Contained</Button> */}
      </div>

    </>
  )
}

export default App
