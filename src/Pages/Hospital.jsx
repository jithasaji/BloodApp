import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Hospital.css'

export default function Hospital() {

  return (
    <div>
      <div>
        {/* header */}
        <Header />
        {/* landing */}
        <div className='hospital-container'>

          <div className='hospital-section'>
            <div className='hospital-content-section'>

              <h2>BLOOD DONATION IS THE
                <br></br><span> LIFE DONATION</span></h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, assumenda consectetur?
                Nihil esse voluptas odit vitae rerum aliquam? Ab earum sequi laborum dolore sit? Aut repellat blanditiis dolorum illum corrupti?</p>

              <button>Learn more</button>
            </div>
            <div className='hospitalimage-section' >
              <div >
              </div>
            </div>
          </div>
        </div>
        <div className='hospital-pages-section'>
          <h1>Equilibrium</h1>
          <div className='hospital-pages'>
            <div>Donate</div>
            <div>Requests</div>
            <div>Dashboard</div>

          </div>

        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}
