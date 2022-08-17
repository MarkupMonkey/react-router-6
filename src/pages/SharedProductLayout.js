import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const Home = () => {
    return (
        <>
            <h2>products</h2>
            <Outlet />
        </>
    );
};
export default Home;
