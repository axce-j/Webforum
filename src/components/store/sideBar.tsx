import React from 'react'
// import { IoChatbubblesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
// import { RiMoreFill } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TabButton from './tabButton';


const SideBar = () => {

  const path = usePathname();

  return (
    <div className='md:fixed h-[100%] w-full md:w-[70px] md:bg-[#611f69]  bg-[#1d1c1d]'>
    <div className='  grid grid-cols-4 md:grid-cols-1 gap-y-4 text-white px-1 text-xs'>
      <p className='bg-gray-400 text-black w-[45px] mt-3 py-1.5 text-center text-2xl font-semibold rounded-lg mx-auto mb-7 hidden md:block'>U</p>

      <Link href='/home' className='col-span-1'>
        <TabButton
        name='Home'
        isSelected={path === '/home'}
        icon={<GoHome className='w-6 h-6 mx-auto ' />}
        />
      </Link>

      {/* <Link href='/dms' className='col-span-1'>
        <TabButton
        name='DMs'
        isSelected={path === '/dms'}
        icon={<IoChatbubblesOutline className='w-6 h-6 mx-auto '/>}
        />
      </Link> */}

      <Link href='/activities' className='col-span-1'>
        <TabButton
        name='Activity'
        isSelected={path === '/activities'}
        icon={<IoNotificationsOutline className='w-6 h-6 mx-auto ' fill='#ffffff' />}
        />
      </Link>

      {/* <Link href='/more' className='col-span-1'>
        <TabButton
        name='More'
        isSelected={path === '/more'}
        icon={<RiMoreFill className='w-6 h-6 mx-auto '/>}
        />
      </Link> */}

      {/* <div className='mx-auto '>
        <div className='mx-auto bg-white backdrop-blur-2xl bg-opacity-20 p-[8px] rounded-lg'>
          <GoHome className='w-6 h-6 mx-auto ' fill='#ffffff' />
        </div>
        <p className='text-center py-1.5 font-semibold'>Home</p>
      </div>

      <div className='mx-auto '>
        <div className='mx-auto bg-white backdrop-blur-2xl bg-opacity-20 p-[8px] rounded-lg'>
          <IoChatbubblesOutline className='w-6 h-6 mx-auto ' fill='#ffffff' />
        </div>
        <p className='text-center py-1.5 font-semibold'>DMs</p>
      </div>

      <div className='mx-auto'>
        <div className='mx-auto bg-white backdrop-blur-2xl bg-opacity-20 p-[8px] rounded-lg'>
          <IoNotificationsOutline className='w-6 h-6 mx-auto ' fill='#ffffff' />
        </div>
        <p className='text-center py-1.5 font-semibold '>Activity</p>
      </div>

      <div className='mx-auto'>
        <div className='mx-auto bg-white backdrop-blur-2xl bg-opacity-20 p-[8px] rounded-lg'>
          <RiMoreFill className='w-6 h-6 mx-auto ' fill='#ffffff' />
        </div>
        <p className='text-center py-1.5 font-semibold '>More</p>
      </div> */}
    </div>
    </div>
  )
}

export default SideBar
