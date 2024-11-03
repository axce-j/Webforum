import React from 'react'

interface NavProps {
    icon: React.ReactNode; 
    name: string; 
    isSelected: boolean; 
  }

const tabButton: React.FC<NavProps> = ({ icon, name, isSelected }) => {

    const divStyles = isSelected
    ? 'bg-white backdrop-blur-2xl bg-opacity-20'
    : ''

  return (
      <div className='mx-auto py-3 md:py-0 ' onClick={() => (name)}>
        <div className={`${divStyles} md:mx-auto md:py-[8px] md:px-[8px] py-[2px] px-[2px] md:rounded-lg rounded-full text-white mx-3`}>
          {icon}
        </div>
        <p className='text-center py-1 font-semibold'>{name}</p>
      </div>
  )
}

export default tabButton
