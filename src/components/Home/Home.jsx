import './Home.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div>
            <Header />
            {
                navigation.status === "loading" ? 
                <p>Loading....</p> : 
                <Outlet />
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;