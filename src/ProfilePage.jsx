import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PersonalProfile from './PersonalProfile';
import SavedProfile from './SavedProfile';

export default function MainContent() {    

    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = (idx) => {
        const newProfiles = [...profiles];
        newProfiles[idx].clicked = !newProfiles[idx].clicked;
        setProfiles(newProfiles);
    }

    useEffect(() => {
      setLoading(true);
      const getAllUsers = async() => {
        try {
          const res = await fetch("https://disc-assignment-5-users-api-iyct.onrender.com/api/users");
          const data = await res.json();
          setProfiles(data);
        } catch (e) {
          console.error("error when fetching users", e);
        } finally {
          setLoading(false);
        }
      }

      getAllUsers();
    }, [])

    if (loading) return <p>currently loading users...</p>
    if (!profiles) return <p>no users found</p>

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
                <div className='single-profiles'>
                {
                    profiles.map((profile, idx) => {
                    return (
                        <SavedProfile
                        key={idx}
                        name={profile.firstName + profile.lastName}
                        contactInfo={profile.email}
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