'use client';

// import React, { useState } from 'react';
// import {
//   Card,
//   // CardHeader,
//   // CardBody,
//   // CardFooter,
//   Typography,
//   Button,
//   // Input,
//   // Textarea,
// } from '@material-tailwind/react';

// import ContactUSImage from '../../../../public/contact_us_image/imag4.jpg';


const ContactPage = () => {
//   const [mapPosition, setMapPosition] = useState(false);
//   const handlemapPosition = () => {
//     setMapPosition(true);
//   };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white py-24'>
      {/* begin responsiveness for below sm screen */}

      <div className='flex sm:hidden'>
        <div className='relative w-[95vw] '>
          <div className=' flex items-center bg-[rgba(97,31,105)] '>
            <div
              className='flex h-[350px] w-full items-end   '
              style={{
                background: 'url(/contact_us_image/helpImage.png)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                backgroundSize: 'cover',
                aspectRatio: '3/2',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                // borderLeft:"30px solid rgba(74,143,131,1)",
                // outline:"none"
              }}
            >
              <div className='items-around flex w-[80%] flex-col justify-start  p-3 sm:hidden '>
                {' '}
                {/* Center the content of this div */}
                <div className='text-xl font-extrabold text-white'>
                  Contact Us
                </div>
                <div className='mt-2 break-words font-medium  text-[15x] text-gray-200 text-white'>
                  Got questions, feedback, or need assistance? We&apos;re here for
                  you! Our dedicated support team is ready to assist you on your
                  journey with Us. Reach out to us through the form below, and
                  let&apos;s make your experience exceptional.
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-full justify-center sm:absolute sm:top-[300px] '>
            <div className='flex w-full max-w-[900px]  flex-col items-center  justify-center  gap-6    text-black    sm:w-[100%]  sm:flex-row'>
              <div className='flex w-full flex-col gap-6 items-end justify-end '>
              <div className='mt-6 w-full rounded-lg bg-white shadow-md'>
  <div className='flex flex-col gap-5 px-6 py-12'>
    <div className='flex flex-col gap-3'>
      <div>
        <h2 className='text-2xl font-bold text-black'>
          Need Help?
        </h2>
      </div>
      <div>
        <p className='text-md font-medium text-gray-600'>
          Our support team will get back to you ASAP via email.
        </p>
      </div>
    </div>

    <div className='flex w-full flex-col gap-3 text-black sm:flex-row sm:justify-between'>
      <div className='sm:w-[43%]'>
        <label htmlFor='name' className='flex flex-col gap-2'>
          <span className='font-medium'>Your Name</span>
          <input
            id='name'
            type='text'
            className='outline-none w-full rounded bg-[#f5f5f5] p-2 pl-4 text-sm md:text-xs'
            placeholder='Enter your name'
          />
        </label>
      </div>

      <div className='sm:w-[43%]'>
        <label htmlFor='email' className='flex w-full flex-col gap-2'>
          <span className='font-medium'>Your Email</span>
          <input
            id='email'
            type='email'
            className='outline-none w-full rounded bg-[#f5f5f5] p-2 pl-4 text-sm md:text-xs'
            placeholder='Enter your Email'
          />
        </label>
      </div>
    </div>

    <div className='w-full'>
      <div className='flex w-full flex-col gap-2 text-black'>
        <span className='font-medium'>Your Message</span>
        <textarea
          name='message'
          rows={6}
          placeholder='Enter your message'
          className='resize-none rounded bg-[#f5f5f5] p-3 pl-4 outline-none'
        />
      </div>
    </div>

    <div className='flex w-full justify-start'>
      <button
        type='submit'
        className='rounded-lg bg-[#611f69] text-white py-2 px-6 hover:bg-[#9b2c74]'
      >
        Submit
      </button>
    </div>
  </div>

  <div className='flex h-3 w-full justify-end'>
    <div className='w-14 rounded-br-lg bg-[#3a3a3a]'></div>
  </div>
</div>


                <div className='w-full'>
                  <iframe
                    className='align-center flex h-[260px]  w-[100%] justify-center rounded-xl p-[2px] '
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.4497335060729!2d3.717858659644857!3d6.892225284366598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd81639e54ec3%3A0x9129b4a8c8367e52!2sBabcock%20University%20Ilishan%20Remo!5e0!3m2!1sen!2sfr!4v1731492311780!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                    style={{
                      background: 'rgba(97,31,105 )',
                      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                      backdropFilter: 'blur( 11.5px )',
                      WebkitBackdropFilter: 'blur( 11.5px )',

                      border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end responsiveness for below sm screen */}

      {/* begin reponsiveness for smscreen and above */}

      <div className='hidden sm:flex'>
        <div className=' relative   w-[100vw] lg:w-[85vw] xl:w-[75vw]'>
          <div
            className='flex min-h-[350px] w-full items-center  justify-between'
            style={{
               backgroundColor: 'rgba(97, 31, 105)',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className='flex w-full flex-col gap-6 px-2  pl-16 sm:text-[30px] md:text-[1rem] lg:text-[2rem]'>
              <div className='items-around flex flex-col  justify-start '>
                {' '}
                {/* Center the content of this div */}
                <div className='font-extrabold text-white md:text-2xl lg:text-4xl'>
                  Contact Us
                </div>
                <div className='break-words font-medium text-gray-200 text-white sm:text-xs md:text-sm lg:text-base lg:leading-7'>
                  Got questions, feedback, or need assistance? We&apos;re here for
                  you! Our dedicated support team is ready to assist you on your
                  journey with Us. Reach out to us through the form below, and
                  let&apos;s make your experience exceptional.
                </div>
              </div>
            </div>

            <div
              className='h-[350px] w-[40%] p-6   '
              style={{
                
                backgroundColor: 'rgba(97, 31, 105)',
                backgroundSize: 'cover',
                aspectRatio: '3/2',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                // borderLeft: '30px solid rgba(74,143,131,1)',
                // outline:"none"
              }}
            >
               <div
              className=' mt-6  '
              style={{
                background: 'url(/contact_us_image/helpImage.png)',
                 backgroundSize: 'cover',
                aspectRatio: '3/2',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                // borderLeft: '30px solid rgba(74,143,131,1)',
                // outline:"none"
              }}
            ></div>
            </div>
          </div>

          <div className=' flex h-full w-full translate-y-[-250px] justify-center '>
            <div className='flex w-full max-w-[900px]  flex-row  items-center  justify-center    gap-6    text-black  sm:w-[90%]'>
              <div className='mt-6   flex w-full max-w-[400px] flex-col items-start justify-start  gap-6 text-black  '>
                <div className='flex flex-col  gap-3'>
                  <div>
                    {' '}
                    <div>
  <h2 className='text-[2rem] font-bold text-black'>
    Need Help?
  </h2>
</div>
                  </div>
                  <div>
  <p className='text-md font-medium text-gray-600'>
    Our support team will get back to you ASAP via email.
  </p>
</div>
                </div>

                <div className='w-full'>
                  <iframe
                    className='align-center flex h-[200px]  w-[100%] justify-center rounded-xl p-[2px] '
                   src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.4497335060729!2d3.717858659644857!3d6.892225284366598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd81639e54ec3%3A0x9129b4a8c8367e52!2sBabcock%20University%20Ilishan%20Remo!5e0!3m2!1sen!2sfr!4v1731492311780!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                    style={{
                      background: 'rgba( 97, 31, 105 )',
                      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                      backdropFilter: 'blur( 11.5px )',
                      WebkitBackdropFilter: 'blur( 11.5px )',

                      border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>

              <div className='flex w-full items-end justify-end bg-white rounded-2xl shadow-xl '>
              <div className='mt-6 w-full rounded-lg'>
  <div className='flex flex-col gap-5 px-6 py-12'>
    <div className='flex w-full items-center justify-center'>
      <div
        className='h-32 w-32 animate-bounce-effect'
        style={{
          background: 'url(/contact_us_image/imag10Light.png)',
          backgroundSize: 'contain',
          aspectRatio: '3/2',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>

    <div className='flex w-full flex-col gap-3 text-black sm:flex-row sm:justify-between'>
      <div className='sm:w-[43%]'>
        <label htmlFor='input' className='flex flex-col gap-2'>
          <span className='font-medium sm:text-sm'>Your Name</span>
          <input
            className='w-full rounded bg-[#f5f5f5] p-2 pl-4 outline-primaryDark sm:text-xs md:text-xs'
            placeholder='Enter your name'
          />
        </label>
      </div>

      <div className='sm:w-[43%]'>
        <label htmlFor='input' className='flex w-full flex-col gap-2'>
          <span className='font-medium sm:text-sm'>Your Email</span>
          <input
            className='w-full rounded bg-[#f5f5f5] p-2 pl-4 outline-primaryDark sm:text-xs md:text-xs'
            placeholder='Enter your email'
          />
        </label>
      </div>
    </div>

    <div className='w-full'>
      <div className='flex w-full flex-col gap-2 text-black'>
        <span className='font-medium'>Your Message</span>
        <textarea
          name='message'
          rows={6}
          placeholder='Enter your message'
          className='resize-none rounded bg-[#f5f5f5] p-3 pl-4 outline-primaryDark sm:w-full'
        />
      </div>
    </div>

    <div className='flex justify-start'>
      <button className='rounded-lg bg-[rgba(97,31,105)] py-2 px-4 text-white'>
        Submit
      </button>
    </div>
  </div>

  <div className='flex h-3 w-full justify-end'>
    <div className='w-14 rounded-br-lg bg-primaryDark'></div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

// hover:absolute hover:top-1 hover:left-[-110px] hover:z-50 hover:h-[70vh]   hover:w-[90vw]  focus:absolute focus:top-1 focus:left-[-110px] focus:z-50 focus:h-[70vh]   focus:w-[90vw]
