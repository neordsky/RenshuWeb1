import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarFun />
      <Layez />
      <ProfileLay />
      <AboMeLay />
      <ProjectLay />
      <ContactLay />
    </>
  )
}

export default App


function NavBarFun() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#151C81' }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#ProfLay">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ProjLay">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ContLAy">Contact</a>
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
    <section className='Layerz'>
      <div class="container">
        <div class="row">
          <div class="col-md">
            <div className="container" style={{ height: '10vw' }}></div>
            <div className="jima1"></div>
            <div className="jima22"></div>
            <div className="container" style={{ height: '10vw' }}></div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProfileLay() {
  return (
    <section className='ProfYerz' id='ProfLay'>
      <div class="container-md text-center" style={{}}>
        <div class="row-md">
          <div class="col-md-5 ">
            <div className="bordprof1"></div>
            <div className="bordprofer"></div>
            <div className="bordprofsan"></div>
            <div className="bordprofshi"></div>
            <div className="bordprofwu"></div>
            <div className="bordprofliu">
              <img src="./assets/haoru.jpg" alt="" style={{ height: '23vw', width: '23vw', borderRadius: '50%', transform: 'rotate(320deg)' }} />
            </div>

          </div>
          <div class="col-md-7 align-items-center" >
            <div style={{ height: '60vw', width: '50%' }}></div>



          </div>

        </div>



      </div>
    </section>
  )
}
function AboMeLay() {
  return (
    <section className='AboMeYerz' id='AboMeLay'>
      <div className="container text-center">
        <div className="row ">
          <div className="col align-self-center">
            <h3 style={{ color: 'white' }}>About Me</h3>
            <p style={{ color: 'white' }}>_______________</p>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center">
            <h5 style={{ color: 'white' }}>Wo De Mingzi Jiao Shi Fikri Wo shi yi ge Programmer.Wo de programmer de neng li shi Mobile, Desktop And Web. Wo hai shi 17 sui he wo shi yi ge xue sheng </h5>
          </div>
        </div>
      </div>
    </section>
  )
}


function ProjectLay() {
  const [count, setCount] = useState(0);
  const lidesk = ["kaisa", "shengfeng", 'I Sream', "lai", "Luna", "lin xia"]
  return (
    <section className='ProjYerz' id='ProjLay'>
      <h3 className='text-center' style={{ color: 'white' }}> Project</h3>
      <p className='text-center' style={{ color: 'white' }}>___________</p>
      <div class="container " style={{}}>
        <div class="row" style={{ display: 'flex' }}>
          <div class="col-md-6 " style={{ display: 'flex', paddingTop: '2rem' }} >
            <div className="rowdeskleft opacity-25 ">

            </div>
            <div className="CardDesk ">
            </div>
            <div className="rowdeskright opacity-25 "></div>
          </div>
          <div class="col-md-6" style={{ display: 'flex', paddingTop: '2rem' }}>
            <div className="rowmoblleft opacity-25 ">
              <button type="button" onClick={
                count === lidesk.length ? () => setCount((count) => count == count) :() => setCount((count) => count + 1)
              }>Left</button>

            </div>
            <div className="CardMobl">
              <h3>{lidesk[count]}</h3>
            </div>
            <div className="rowmoblright opacity-25 ">
              <button type="button" onClick={() => setCount((count) => {
                if (count = 1) {

                } else {
                  count - 1
                }
              })}>Right</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactLay() {
  return (
    <section className='ContactYerz' id='ContLAy'>
      <h3 className='text-center' style={{ color: 'white' }}>Contact Me</h3>
      <p className='text-center' style={{ color: 'white' }}>__________</p>
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label" style={{ color: 'white' }}>Email</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Input your Email" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label" style={{ color: 'white' }}>Username</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Input your Name" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label" style={{ color: 'white' }} >Alamat</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Input your koordinat" />
            </div>
            <div className="mb-3">
              <label for="inputState" class="form-label" style={{ color: 'white' }}>Pilih Pesanan</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Mobile</option>
                <option >Desktop</option>
                <option >Web</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}