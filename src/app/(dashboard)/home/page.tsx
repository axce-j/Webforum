"use client"
import React, { useState } from 'react'

const page = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const posts = [
    { 
      title: 'Understanding React Hooks', 
      timestamp: 'posted 2 days ago',
      content: 'A comprehensive guide to React Hooks including useState, useEffect, and custom hooks.'
    },
    { 
      title: 'TypeScript Best Practices', 
      timestamp: 'posted 5 days ago',
      content: 'Learn about TypeScript interfaces, types, and how to properly structure your TypeScript projects.'
    },
    { 
      title: 'Next.js 13 Features', 
      timestamp: 'posted 1 week ago',
      content: 'Exploring the new features in Next.js 13 including app directory, server components, and more.'
    }
  ];

  return (
    <div className='relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden' style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className='layout-container flex h-full grow flex-col'>
        <div className='px-4 md:px-40 flex flex-1 justify-center py-3 md:py-5'>
          <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
            <div className='flex p-4 @container'>
              <div className='flex w-full flex-col gap-4 items-center'>
                <div className='flex gap-4 flex-col items-center'>
                  <div
                    className='bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 md:min-h-32 md:w-32'
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/e8277fd2-ec07-42ec-98d0-d4d3f062648f.png")'}}
                  />
                  <div className='flex flex-col items-center justify-center'>
                    <p className='text-[#0c141d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-center'>Helen Smith</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='pb-3'>
              <div className='flex border-b border-[#cddbea] px-2 md:px-4 justify-between overflow-x-auto'>
                <div className='flex flex-col items-center justify-center border-b-[3px] border-b-[#0066cc] text-[#0c141d] pb-[13px] pt-4 flex-1 min-w-[100px]'>
                  <p className='text-[#0c141d] text-sm font-bold leading-normal tracking-[0.015em]'>Posts</p>
                </div>
              </div>
            </div>

            <h2 className='text-[#0c141d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'>Posts</h2>

            {posts.map((post, index) => (
              <div key={index} className='mb-2'>
                <div 
                  onClick={() => toggleAccordion(index)}
                  className='flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 cursor-pointer hover:bg-slate-100'
                >
                  <div className='text-[#0c141d] flex items-center justify-center rounded-lg bg-[#e6edf4] shrink-0 size-10 md:size-12'>
                    <svg 
                      xmlns='http://www.w3.org/2000/svg' 
                      width='20px' 
                      height='20px' 
                      className={`md:w-6 md:h-6 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                      fill='currentColor' 
                      viewBox='0 0 256 256'
                    >
                      <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'/>
                    </svg>
                  </div>
                  <div className='flex flex-col justify-center flex-1'>
                    <p className='text-[#0c141d] text-sm md:text-base font-medium leading-normal line-clamp-1'>{post.title}</p>
                    <p className='text-[#4573a1] text-xs md:text-sm font-normal leading-normal line-clamp-2'>{post.timestamp}</p>
                  </div>
                </div>
                {activeAccordion === index && (
                  <div className='px-20 py-4 bg-slate-50 border-t border-slate-200 transition-all'>
                    <p className='text-[#4573a1] text-sm md:text-base'>{post.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page