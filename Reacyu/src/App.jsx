import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Berandapage from './Pages/Beranda'
import Pencarian from './Pages/Pencarian'
import "bootstrap/dist/css/bootstrap.min.css"

import styled from 'styled-components';
import './App.css'

export default function App() {

  const [count, setCount] = useState(0)
  const [kazoeru, setbango] = useState("Zero")
  const arrda = ["yi", "er", "san", "shi"];
  return (
    <div className="App">
      <Header />
      <div className="content">

      </div>

    </div>













    /* <div className='text-bg-info p-3'>
        {kazoeru === "yi" ? <Berandapage /> : kazoeru === "er" ? <Pencarian /> : <h1>nothing</h1>}
      </div>
      <div>
  
        {arrda.map((dasa) => (<button variant="primary" onClick={() => setbango((kazoeru) => kazoeru = dasa)}>{dasa}</button>))}
  
      </div> */

  )

}


function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Layez() {
  return (
    <div className="container">
      <div className="jima1"></div>
      <div className="jima22"></div>
    </div>
  )
}


function UIs() {
  const dasa = ['Yukino', 'Yui', 'Haruno'];
  const [kazu, funct] = React.useState(0);
  function Fuya() {

    funct(kazu + 1)

  }
  function Fuyan() {

    if (kazu === 0) {

    } else {
      funct(kazu - 1)
    }

  }
  function Fuyanre() {

    funct(kazu - kazu)

  }

  return (<>
    <NeUisx naut="io" />
    <NeUi aut="here" />
    <h1>({kazu}) </h1>
    <p onClick={e => { alert('ok!') }}> Xue xi React Hen Qian dan</p>
    <ul>
      {
        dasa.map((dsa) => (<li key={dsa}  > {dsa}</li>))
      }</ul>
    <button onClick={Fuya}>Plus</button>
    <button onClick={Fuyan}>MIn</button>
    <button Enabled={false} onClick={Fuyanre}>Ret </button>
  </>

  )

}
function NeUi(props) {
  return (<><h2 onClick={e => { alert('yukinoshita ') }}>Click to Pop {props.aut}</h2></>)
}
function NeUisx({ naut }) {
  return (<><h2 onClick={e => { alert('yukinoshita ') }}>Click to Pop {naut ? naut : "niya"}</h2></>)
}