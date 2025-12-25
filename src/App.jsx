import './App.css'

function NavBar() {
  return (
    <nav>
      <ul>
        <div className="logo-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
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
  return (
    <div className="profile">
      <img src="data:image/jpeg;base64,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" alt="sample profile pic" />
      
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
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
        <h4>Phone Number: 1234567890</h4>
      </div>

      <div className="buttons">
        <button className="edit-button">Edit</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  )
}

const PROFILES = [
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  },
  {
    name: "Shelby Berry",
    contactInfo: "hello@gmail.com"
  }
]

function SavedProfile(props) {
  return (
    <>
      <hr className="my-line"/>
      <h3>{props.name}</h3>
      <p>Contact Info: {props.contactInfo}</p>
    </>
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
              PROFILES.map((profile, idx) => {
                return (
                  <SavedProfile
                    key={idx}
                    name={profile.name}
                    contactInfo={profile.contactInfo}
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
