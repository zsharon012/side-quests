import NavBar from "./NavBar";
import Footer from "./Footer";
import Phones from "../src/assets/phones.png"

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="everything-home">
                <img src={Phones} alt="phone picture" className="phone-pic"/>
                <div className="home-info">
                    <p>Start doing</p>
                    <h1>Side Quests: Gain XP through joining quests</h1>
                    <p>
                        Meet people through joining quests. After the quest is over, each player will have the option
                        to share their contact information to their teammates. Each month, a leader board is posted,
                        stay on top to earn rewards and badges!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}