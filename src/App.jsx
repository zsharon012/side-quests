import { useEffect, useState } from 'react';
import './App.css';
import happyPerson from '../src/assets/happy-person.png';

function NavBar() {
  return (
    <nav>
      <ul>
        <div className="logo-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
          </svg>
          <li className="selected">SideQuests</li>
        </div>
        <div className="topnav">
          <input type="text" placeholder="Search.." />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>
        <div className="logo-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
          </svg>
          <li className="selected">My Account</li>
        </div>
      </ul>
    </nav>
  )
}

function PersonalProfile() {

  const [editCount, setEditCount] = useState(0);

  useEffect(() => {
    console.log('user clicked edit: %d times', editCount);
  }, [editCount])

  return (
    <div className="profile">
      <img src={happyPerson} alt="sample profile pic" />
      
      <h3>About</h3>
      <div className="profile-bio">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cake2-fill" viewBox="0 0 16 16">
          <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886q-.532-.09-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15 15 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806m-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17q.512-.02 1-.055zm-3 0v5.176q-.512-.018-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806"/>
          <path d="M4.5 6.988V4.226a23 23 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017q.498.037 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29 29 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009q.52-.018 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112q.518.047 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049q.547-.091 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603s-4.022-.227-5.432-.603c-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046q.486.116 1.033.208l.292.05a.25.25 0 0 0 .291-.247M1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277z"/>
        </svg>
        <h4>Birthday: 01/01/01</h4>
      </div>
      <div className="profile-bio">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
        <h4>Location: Evanston</h4>
      </div>
      <div className="profile-bio">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>
        <h4>Email: something@gmail.com</h4>
      </div>
      <div className="profile-bio">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
        <h4>Phone Number: 1234567890</h4>
      </div>

      <div className="buttons">
        <button className="edit-button" onClick={() => {setEditCount(editCount + 1)}}>Edit</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  )
}

const PROFILES = [
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com",
    clicked: false
  }
]

function SavedProfile({ clicked, name, contactInfo, handleClick }) {
  const bgColor = clicked ? 'rgba(229, 229, 229, 1)' : '#F9F9FF';

  return (
    <div style={{ backgroundColor: bgColor }} onClick={handleClick}>
      <hr className="my-line"/>
      <h3>{name}</h3>
      <p>Contact Info: {contactInfo}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>SideQuests © 2025. All rights reserved.</p>
    </footer>
  )
}

function App() {
  const [profiles, setProfiles] = useState(PROFILES);

  const handleClick = (idx) => {
    const newProfiles = [...profiles];
    newProfiles[idx].clicked = !newProfiles[idx].clicked;
    setProfiles(newProfiles);
  }

  return (
    <div className="everything">
      <NavBar />
      <div className="main-content">
        <PersonalProfile />
        <div className="saved-info">
          <h2>Mary Burger</h2>
          <div className="headers-saved-info">
            <p>Completed Quests</p>
            <p>Saved People</p>
            <p className="selected">Past Teammates</p>
          </div>
          <div>
            {
              profiles.map((profile, idx) => {
                return (
                  <SavedProfile
                    key={idx}
                    name={profile.name}
                    contactInfo={profile.contactInfo}
                    clicked={profile.clicked}
                    handleClick={() => {handleClick(idx)}}
                  />
                )
              })
            }
            <hr className="my-line"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
