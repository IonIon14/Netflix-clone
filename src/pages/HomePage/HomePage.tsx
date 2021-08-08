
import Featured from '../../components/Featured/Featured'
import NavBar from '../../components/NavBar/NavBar'

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="home">
            <NavBar />
            <Featured type="movie" />

        </div>
    )
}

export default HomePage
