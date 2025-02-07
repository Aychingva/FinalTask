import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBasket, FaVoicemail } from "react-icons/fa";

import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router';
import Login from '../../companents/login';
import Register from '../../companents/register';
import { useSelector } from 'react-redux';
import Productcards2 from '../../companents/productcards2.jsx';
import Favorite from '../../companents/fav/index.jsx';
import Basket from '../../companents/basket/index.jsx';
import ProductSearch from '../../companents/search/index.jsx';

const navigation = [
  { name: ' CREATE><', href: '/', current: true },
  { name: 'Women', href: '/women', current: false },
  { name: 'Men', href: '/men', current: false },
  { name: 'Girls', href: '/girls', current: false },
  { name: 'Boys', href: '/boys', current: false },
  { name: 'Sales', href: '/sales', current: false },
]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openRight, setOpenRight] = useState(false);
  const [basketopen,setbasketopen]=useState(false)
  
  const{favlist}=useSelector(state=>state)
  const handleLikeClick = () => {
    setOpenRight(!openRight); 
    setBlurred(!blurred); 
    
  };
  const handlebasketClick = () => {
    setbasketopen(!basketopen); 
    setBlurred(!blurred); 
    
  };
  const handleCloseSidebar = () => {
    setOpenRight(false); // Hide the sidebar
    setBlurred(false); // Remove the blur
  };


  return (
    <Disclosure as="nav" className="bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            {/* <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton> */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <ProductSearch/>
        
          {/* <input type="text" placeholder="Search for product"  className='border-[1px] w-[280px] h-[38px] mr-[40px] outline-none px-[10px]'/> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={handleLikeClick}
             
              className="relative rounded-full bg-[rgb(23,105,106)] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-[20px]"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <MdFavoriteBorder></MdFavoriteBorder>
                

            </button>
            <button
              type="button"
              onClick={ handlebasketClick}
              className="relative rounded-full bg-[rgb(23,105,106)] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-[20px]"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
             
              
                <FaShoppingBasket/>


            </button>
            <Basket openRight={basketopen} setOpenRight={setbasketopen}/>
            

  
  
           
    <div>
      
        <button
          className="relative flex ml-[90px] w-[40px] h-[40px] rounded-full items-center justify-center bg-[rgb(23,105,106)] hover:bg-gray-300"
          onClick={() => setOpen(true)}
        >
          <IoPersonAddOutline />
        </button>

        <Favorite openRight={openRight} setOpenRight={setOpenRight} />
    </div>
           {/* <Favorite/> */}
           <Login open={open} setOpen={setOpen} />
           <Register open={open} setOpen={setOpen}/>
          

             
         

            


            <Menu as="div" className="relative ml-3">
              <div>
                
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
         
        </div>
       
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
         
        </div>
      </DisclosurePanel>
    </Disclosure>
  
  )
}
