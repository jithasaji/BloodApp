import './Donate.css'
import * as React from 'react';
import SwipeableEdgeDrawer from '../Components/SwipeableEdgeDrawer';
import Header from '../Components/Header'
import DonateCard from '../Components/DonateCard';
import RequestBlood from '../Components/RequestBlood';
import Action from '../Components/Action';

function Donate() {
  return (
    <div>
      <div className='donate-container'>
        <div className='donate-section'>
          <Header />
          <div className='donate-header'>
            <div >
              <SwipeableEdgeDrawer />
            </div>
            <input type="text" placeholder='Search by location' />
            <i class="ri-search-eye-line"></i>
          </div>
          <div className='hospital-list'>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <DonateCard />
            </div>



          </div>
          <RequestBlood />
        </div>
        <Action/>
      </div>

    </div>
  )
}

export default Donate
