import logo from './logo.png'
import {Link} from 'react-router-dom'
import { IoIosHome } from 'react-icons/io'
import { BsCalendarFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { IoIosPeople } from 'react-icons/io'
import { GiSoccerField } from 'react-icons/gi'

const Navbar = ({show}) => {
    return ( <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li>
                    <Link to='/choosesport'>
                        <GiSoccerField />
                        Choose Sport
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>
                        <IoIosHome />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/calendar'>
                        <BsCalendarFill />    
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link to='/addavailable'>
                        <IoIosAddCircle />
                        Add/Available
                    </Link>
                </li>
                <li>
                    <Link to='/practices'>
                        <IoIosPeople />
                        Practices
                        </Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar 