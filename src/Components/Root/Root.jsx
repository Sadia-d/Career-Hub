
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Fotter/Fotter';

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