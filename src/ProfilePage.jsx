import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PersonalProfile from './PersonalProfile';
import SavedProfile from './SavedProfile';

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

export default function MainContent() {    

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