import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const {count, setSearchByCategory } = useContext(ShoppingCartContext);
  const activeSytle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className="font-semibold text-lg">
            <NavLink to='/'>
                Shopi
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/'
                onClick={() => setSearchByCategory()}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                All
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/clothing'
                onClick={() => setSearchByCategory('clothing')}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Clothes
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/electronics'
                onClick={() => setSearchByCategory('electronics')}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/furniture'
                onClick={() => setSearchByCategory('furniture')}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Furniture
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/toys'
                onClick={() => setSearchByCategory('toys')}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Toys
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/others'
                onClick={() => setSearchByCategory('others')}
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Others
            </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className="text-black/60">
            teff@platzi.com
        </li>
        <li>
            <NavLink 
                to='/my-orders'
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                My Orders
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/my-account'
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                My Account
            </NavLink>
        </li>
        <li>
            <NavLink 
                to='/sign-in'
                className={({ isActive}) =>
                    isActive ? activeSytle : undefined
                }>
                Sign In
            </NavLink>
        </li>
        <li className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
            <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
