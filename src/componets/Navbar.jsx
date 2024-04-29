import React from 'react'
import { BiHome } from 'react-icons/bi';

function Navbar() {


    return (

        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">



                    <a className="flex title-font  font-medium gap-5  items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./image/logo.png" alt="x" className='w-[100px] h-[40px] object-cover mt-1 ' />

                        <p className='relative ml-[-30px] mb-2 flex items-center'>
                            <span>
                                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.56129 0.564392H0.109009V25.3607H3.56129V13.6453H18.3785V25.3607H21.8308V0.564392H18.3785V10.4013H3.56129V0.564392Z" fill="#06286E" />
                                </svg>

                            </span>
                            <span className='mt-2'>
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.466675 0.985596L8.64578 19.3607C7.90809 21.957 6.93629 22.8104 4.58902 22.8104C4.11977 22.8104 3.5163 22.7425 2.67872 22.6058V25.748C3.68382 25.8498 4.4215 25.8847 4.92406 25.8847C9.38245 25.8847 10.1201 24.2108 12.2989 19.224L20.2772 0.985596H16.4898L10.4895 16.4581L4.3549 0.985596H0.466675Z" fill="#06286E" />
                                </svg>

                            </span>

                            <span className='mt-2'>
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4499 0.985541V3.991C16.0089 1.73716 13.595 0.404602 10.4435 0.404602C4.77914 0.404602 0.823303 4.46912 0.823303 10.2076C0.823303 15.911 4.74483 19.8727 10.4778 19.8727C13.3599 19.8727 15.5729 18.8147 17.4499 16.6627V17.2775C17.4499 21.2731 15.6062 22.8782 10.6786 22.8782C7.69557 22.8782 6.01938 21.9569 5.68434 19.9755H2.03024C2.39858 23.8005 5.38261 25.9525 10.6453 25.9525C17.6841 25.9525 20.7014 23.1856 20.7014 17.004V0.985541H17.4499ZM10.947 3.47895C15.1037 3.47895 17.6841 6.00629 17.6841 10.2076C17.6841 14.3399 15.1037 16.7994 10.947 16.7994C6.79037 16.7994 4.24228 14.3739 4.24228 10.2076C4.24228 6.00629 6.79037 3.47895 10.947 3.47895Z" fill="#06286E" />
                                </svg>

                            </span>
                            <span className='mt-2'>
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4499 0.985541V3.991C16.0089 1.73716 13.595 0.404602 10.4435 0.404602C4.77914 0.404602 0.823303 4.46912 0.823303 10.2076C0.823303 15.911 4.74483 19.8727 10.4778 19.8727C13.3599 19.8727 15.5729 18.8147 17.4499 16.6627V17.2775C17.4499 21.2731 15.6062 22.8782 10.6786 22.8782C7.69557 22.8782 6.01938 21.9569 5.68434 19.9755H2.03024C2.39858 23.8005 5.38261 25.9525 10.6453 25.9525C17.6841 25.9525 20.7014 23.1856 20.7014 17.004V0.985541H17.4499ZM10.947 3.47895C15.1037 3.47895 17.6841 6.00629 17.6841 10.2076C17.6841 14.3399 15.1037 16.7994 10.947 16.7994C6.79037 16.7994 4.24228 14.3739 4.24228 10.2076C4.24228 6.00629 6.79037 3.47895 10.947 3.47895Z" fill="#06286E" />
                                </svg>

                            </span>

                            <span className='mt-2'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9861 10.8564V10.2076C19.9861 4.09382 16.332 0.404602 10.1642 0.404602C4.1305 0.404602 0.275574 4.2645 0.275574 10.2076C0.275574 16.1156 4.0972 19.8727 10.1642 19.8727C14.9576 19.8727 18.4109 17.6189 19.6844 13.6572H15.8961C15.1594 15.6725 13.014 16.7994 10.1642 16.7994C6.30924 16.7994 3.72785 14.4428 3.72785 10.8564H19.9861ZM3.79546 8.4997C4.33132 5.35749 6.71188 3.47895 10.1642 3.47895C13.6507 3.47895 15.997 5.39142 16.4996 8.4997H3.79546Z" fill="#06286E" />
                                </svg>

                            </span>


                            <span >
                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.28395 0.564392L10.8375 12.7919L0.814697 25.3607H8.45694L14.4916 17.4024L20.1559 25.3607H28L18.0781 12.724L27.665 0.564392H20.1559L14.5582 8.31709L8.9605 0.564392H1.28395Z" fill="#06286E" />
                                </svg>

                            </span>
                        </p>
                    </a>

                    <nav className="md:ml-auto flex flex-wrap gap-[40px] items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900  text-[18px] font-[400] text-[#3A3740] leading-[21.78px]   ">Home</a>
                        <a className="mr-5 hover:text-gray-900 text-[18px] font-[400]  text-[#3A3740] leading-[21.78px]   ">Flashcard</a>
                        <a className="mr-5 hover:text-gray-900 text-[18px] font-[400] text-[#3A3740] leading-[21.78px]   ">Contact</a>
                        <a className="mr-5 hover:text-gray-900 text-[18px] font-[400] text-[#3A3740] leading-[21.78px]   ">FAQ</a>
                        <a className="inline-flex items-center  py-3 px-10 focus:outline-none rounded-full text-base mt-4 md:mt-0 bg-gradient-to-b from-[#06286E] to-[#164EC0] 
            
                    text-[18px] font-[500] text-[#FFFFFF] leading-[21.78px]
                    " >
                            Login
                        </a>
                    </nav>

                </div>
            </header>


            <nav className="  mx-10 rounded-md mt-6">
                <ol className="list-reset flex flex-wrap items-center nav-sub">

                    <li>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5738 9.71747L12.8238 2.06123C12.5958 1.86151 12.3031 1.7514 12 1.7514C11.6969 1.7514 11.4042 1.86151 11.1763 2.06123L2.42625 9.71747C2.29221 9.83491 2.18483 9.97966 2.11132 10.142C2.0378 10.3043 1.99985 10.4805 2 10.6587V21.7487C2 22.0802 2.1317 22.3982 2.36612 22.6326C2.60054 22.867 2.91848 22.9987 3.25 22.9987H8.25C8.58152 22.9987 8.89946 22.867 9.13388 22.6326C9.3683 22.3982 9.5 22.0802 9.5 21.7487V16.7487C9.5 16.4172 9.6317 16.0993 9.86612 15.8648C10.1005 15.6304 10.4185 15.4987 10.75 15.4987H13.25C13.5815 15.4987 13.8995 15.6304 14.1339 15.8648C14.3683 16.0993 14.5 16.4172 14.5 16.7487V21.7487C14.5 22.0802 14.6317 22.3982 14.8661 22.6326C15.1005 22.867 15.4185 22.9987 15.75 22.9987H20.75C21.0815 22.9987 21.3995 22.867 21.6339 22.6326C21.8683 22.3982 22 22.0802 22 21.7487V10.6587C22.0002 10.4805 21.9622 10.3043 21.8887 10.142C21.8152 9.97966 21.7078 9.83491 21.5738 9.71747Z" stroke="#696671" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </li>
                    <li>

                        <svg width="24" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z" fill="#06286E" />
                        </svg>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-primary transition duration-150 ease-in-out 
                                hover:text-primary-accent-300 focus:text-primary-accent-300 
                                
                                text-[18px]
                                leading-[21.78px]
                                text-[#696671]
                                font-[500]

                                
                                active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        >Flashcard</a
                        >
                    </li>
                    <li>
                        <svg width="24" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z" fill="#06286E" />
                        </svg>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-primary transition duration-150 ease-in-out
                                text-[18px]
                                leading-[21.78px]
                                text-[#696671] 
                                font-[500]
                                hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        >Mathematics</a
                        >
                    </li>
                    <li>
                        <svg width="24" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z" fill="#06286E" />
                        </svg>

                    </li>
                    <li>

                        <a
                            href="#"
                            className="text-primary transition duration-150 ease-in-out
                                text-[18px]
                                leading-[21.78px]
                                text-[#06286E] 
                                font-[600]
                                hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        > Relation and Function</a
                        >

                    </li>
                </ol>


            </nav>

        </>



    )
}

export default Navbar;
