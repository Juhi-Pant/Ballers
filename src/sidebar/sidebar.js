import React, { useState } from 'react';
import {
  MdOutlineDashboard,
  MdAccountCircle,
  MdAnalytics,
  MdOutlineSettings,
  MdLogout,
} from 'react-icons/md';
import {
  BsChevronDown,
  BsChatLeftText,
  BsCalendarCheck,
  BsFiles,
  BsServer,
} from 'react-icons/bs';

const Menus = [
  { title: 'Dashboard', src: '/Dashboard', icon: <MdOutlineDashboard /> },
  { title: 'Inbox', src: 'Chat', icon: <BsChatLeftText /> },
  { title: 'Accounts', src: 'User', gap: true, icon: <MdAccountCircle /> },
  ,
  
  { title: 'My Opportunities', src: 'Chart', icon: <MdAnalytics /> },
  { title: 'Setting', src: 'Setting', icon: <MdOutlineSettings /> },
  { title: 'Logout', src: 'Logout', icon: <MdLogout /> },
];

const App = () => {
  const [Menu, SetMenu] = useState(Menus)
  const [open, setOpen] = useState(true);
  const setSubMenuOpen = (index) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="h-screen flex items-end justify-end ">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 w-10 bg-gradient-to-r from-[#21202d] to-[#32a383] h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${open ? 'w-48 px-2 ' : 'w-0 '
          } lg:w-72  bg-gradient-to-r from-[#21202d] to-[#32a383]  h-screen  relative duration-500`}
      >
        <div className=" justify-center mt-3">
          <h1
            className={`text-white  font-medium text-2xl text-center duration-200 ${!open && 'invisible'
              }`}
          >
            InvestApp
          </h1>
        </div>
        <ul className="pt-6">
          {Menu.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <span className="flex-1">{Menu.title}</span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(index)}
                    className={`${Menu.isOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              {Menu.subMenus && Menu.isOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
