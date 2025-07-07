
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1150px] mx-auto' >
            <Header></Header>
            <Outlet></Outlet>
            </div> 
            <Footer></Footer>
        </div>
    );
};

export default Root;