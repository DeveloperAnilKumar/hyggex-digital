import React, { useState } from 'react';


function Slider() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <div>
            <p className="mx-10 text-[32px]  nav   leading-[39.01px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent mt-16">
                Relations and Functions ( Mathematics )
            </p>


            <div className='flex justify-center flex-wrap flex-col items-center mt-6 '>



                <div className="w-full md:w-[546px] h-auto md:h-[29px]">
                    <ul className="flex  tabs md:flex-nowrap font-sans gap-2 md:gap-[40px] mt-4">
                        <li className="text-[#06286E] border-b-2 border-[#06286E] font-bold leading-[24.2px] text-[16px] md:text-[20px] w-full md:w-auto text-center text-base py-3 px-2 md:px-4 cursor-pointer">
                            Study
                        </li>
                        <li className="text-[#696671] font-[500] leading-[24.2px] text-[16px] md:text-[20px] w-full md:w-auto text-center text-base py-3 px-2 md:px-4 cursor-pointer">
                            Quiz
                        </li>
                        <li className="text-[#696671] font-[500] leading-[24.2px] text-[16px] md:text-[20px] w-full md:w-auto text-center text-base py-3 px-2 md:px-4 cursor-pointer">
                            Test
                        </li>
                        <li className="text-[#696671] font-[500] leading-[24.2px] text-[16px] md:text-[20px] w-full md:w-auto text-center text-base py-3 px-2 md:px-4 cursor-pointer">
                            Game
                        </li>
                        <li className="text-[#696671] font-[500] leading-[24.2px] text-[16px] md:text-[20px] w-full md:w-auto text-center text-base py-3 px-2 md:px-4 cursor-pointer">
                            Others
                        </li>
                    </ul>
                </div>






                <div className="flip-card " onClick={handleClick}>
                    <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                        <div className="flip-card-front">

                            <div className='flex justify-between items-center p-4  '>
                                <div>
                                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.75824 27.7612C5.75824 28.5405 6.39585 29.1781 7.17515 29.1781H12.8428C13.6221 29.1781 14.2597 28.5405 14.2597 27.7612V26.3443H5.75824V27.7612ZM10.009 0.839813C4.53969 0.839813 0.0905762 5.28893 0.0905762 10.7582C0.0905762 14.1305 1.77671 17.0918 4.34132 18.8913V22.0935C4.34132 22.8728 4.97893 23.5105 5.75824 23.5105H14.2597C15.039 23.5105 15.6766 22.8728 15.6766 22.0935V18.8913C18.2413 17.0918 19.9274 14.1305 19.9274 10.7582C19.9274 5.28893 15.4783 0.839813 10.009 0.839813ZM14.0472 16.5676L12.8428 17.4177V20.6766H7.17515V17.4177L5.97077 16.5676C5.03205 15.9168 4.26472 15.0486 3.73425 14.037C3.20378 13.0254 2.92593 11.9005 2.92441 10.7582C2.92441 6.84753 6.0983 3.67364 10.009 3.67364C13.9197 3.67364 17.0936 6.84753 17.0936 10.7582C17.0936 13.0678 15.96 15.2357 14.0472 16.5676Z" fill="#F5F5F5" />
                                    </svg>

                                </div>
                                <div>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8249 7.50143V4.58258C26.5067 5.87197 30.7433 10.9445 30.7433 17.0089C30.7433 23.0733 26.5067 28.1459 20.8249 29.4353V26.5164C24.9198 25.2979 27.9094 21.5005 27.9094 17.0089C27.9094 12.5173 24.9198 8.71997 20.8249 7.50143ZM5.2388 12.7582V21.2597H10.9065L17.991 28.3443V5.67361L10.9065 12.7582H5.2388ZM24.3672 17.0089C24.3669 15.8217 24.0351 14.6582 23.4093 13.6493C22.7834 12.6405 21.8884 11.8264 20.8249 11.2988V22.7049C22.9219 21.6706 24.3672 19.5169 24.3672 17.0089Z" fill="#F5F5F5" />
                                    </svg>

                                </div>
                            </div>


                            <div className=' flex justify-center items-center my-28  '>
                                <p className='font-bold text-[38.26px]  leading-[45.91px] text-center tracking-wider text-[#FFFFFF] content '>  9 + 6 + 7x - 2x - 3 </p>
                            </div>


                        </div>
                        <div className="flip-card-back">
                            <div className='flex justify-between items-center p-4 '>
                                <div>
                                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.75824 27.7612C5.75824 28.5405 6.39585 29.1781 7.17515 29.1781H12.8428C13.6221 29.1781 14.2597 28.5405 14.2597 27.7612V26.3443H5.75824V27.7612ZM10.009 0.839813C4.53969 0.839813 0.0905762 5.28893 0.0905762 10.7582C0.0905762 14.1305 1.77671 17.0918 4.34132 18.8913V22.0935C4.34132 22.8728 4.97893 23.5105 5.75824 23.5105H14.2597C15.039 23.5105 15.6766 22.8728 15.6766 22.0935V18.8913C18.2413 17.0918 19.9274 14.1305 19.9274 10.7582C19.9274 5.28893 15.4783 0.839813 10.009 0.839813ZM14.0472 16.5676L12.8428 17.4177V20.6766H7.17515V17.4177L5.97077 16.5676C5.03205 15.9168 4.26472 15.0486 3.73425 14.037C3.20378 13.0254 2.92593 11.9005 2.92441 10.7582C2.92441 6.84753 6.0983 3.67364 10.009 3.67364C13.9197 3.67364 17.0936 6.84753 17.0936 10.7582C17.0936 13.0678 15.96 15.2357 14.0472 16.5676Z" fill="#F5F5F5" />
                                    </svg>

                                </div>
                                <div>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8249 7.50143V4.58258C26.5067 5.87197 30.7433 10.9445 30.7433 17.0089C30.7433 23.0733 26.5067 28.1459 20.8249 29.4353V26.5164C24.9198 25.2979 27.9094 21.5005 27.9094 17.0089C27.9094 12.5173 24.9198 8.71997 20.8249 7.50143ZM5.2388 12.7582V21.2597H10.9065L17.991 28.3443V5.67361L10.9065 12.7582H5.2388ZM24.3672 17.0089C24.3669 15.8217 24.0351 14.6582 23.4093 13.6493C22.7834 12.6405 21.8884 11.8264 20.8249 11.2988V22.7049C22.9219 21.6706 24.3672 19.5169 24.3672 17.0089Z" fill="#F5F5F5" />
                                    </svg>

                                </div>
                            </div>
                            <div className=' flex justify-center items-center my-28  '>
                                <p className='font-bold text-[38.26px]  leading-[45.91px] text-center tracking-wider text-[#FFFFFF] content'> 5x + 12 </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex justify-center flex-wrap gap-8 md:gap-36  items-center mt-4'>
                    <span className="inline-block small-svg ">
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z" fill="url(#paint0_linear_1_169)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_169" x1="15" y1="0.184647" x2="15" y2="30.2034" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06286E" />
                                    <stop offset="1" stopColor="#164EC0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </span>



                    <div className='  flex  flex-wrap   items-center  gap-6 md:gap-[43px]'>
                        <span className="icon-container md:text-sm">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0.194031C35.9334 0.194031 41.7336 1.9535 46.6671 5.24994C51.6006 8.54638 55.4457 13.2317 57.7164 18.7135C59.987 24.1953 60.5811 30.2273 59.4235 36.0467C58.266 41.8662 55.4088 47.2116 51.2132 51.4072C47.0176 55.6028 41.6721 58.46 35.8527 59.6176C30.0333 60.7751 24.0013 60.181 18.5195 57.9104C13.0377 55.6398 8.35235 51.7946 5.05591 46.8611C1.75947 41.9277 0 36.1275 0 30.194C0.0154533 22.2423 3.18112 14.6206 8.80386 8.99789C14.4266 3.37515 22.0482 0.209481 30 0.194031ZM20.3661 31.8956L31.9046 42.2802C32.3325 42.6651 32.8861 42.8806 33.4615 42.8863C33.782 42.8876 34.0991 42.8214 34.3922 42.6921C34.6854 42.5627 34.948 42.3731 35.1631 42.1356C35.3678 41.912 35.5265 41.6502 35.6301 41.3652C35.7336 41.0803 35.78 40.7777 35.7666 40.4748C35.7532 40.1719 35.6802 39.8747 35.5518 39.6C35.4234 39.3253 35.2422 39.0786 35.0185 38.874L25.3846 30.194L35.0185 21.511C35.4459 21.0922 35.6939 20.5237 35.7103 19.9255C35.7266 19.3274 35.5099 18.7462 35.106 18.3047C34.702 17.8633 34.1424 17.596 33.5451 17.5592C32.9478 17.5225 32.3596 17.7192 31.9046 18.1079L20.3661 28.4925C20.1302 28.7087 19.9417 28.9716 19.8128 29.2645C19.6839 29.5574 19.6174 29.874 19.6174 30.194C19.6174 30.5141 19.6839 30.8306 19.8128 31.1235C19.9417 31.4165 20.1302 31.6794 20.3661 31.8956Z" fill="url(#paint0_linear_1_171)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_171" x1="30" y1="0.194031" x2="30" y2="60.194" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#06286E" />
                                        <stop offset="1" stopColor="#164EC0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </span>

                        <span className='text-[#202B37] sm-font text-2xl font-bold leading-[29.05px] inline-block '>
                            1/10
                        </span>
                        <span className='icon-container'>
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0.194031C24.0666 0.194031 18.2664 1.9535 13.3329 5.24994C8.39943 8.54638 4.55426 13.2317 2.28363 18.7135C0.0129984 24.1953 -0.581101 30.2273 0.576455 36.0467C1.73401 41.8662 4.59123 47.2116 8.78681 51.4072C12.9824 55.6028 18.3279 58.46 24.1473 59.6176C29.9667 60.7751 35.9987 60.181 41.4805 57.9104C46.9623 55.6398 51.6476 51.7946 54.9441 46.8611C58.2405 41.9277 60 36.1275 60 30.194C59.9845 22.2423 56.8189 14.6206 51.1961 8.99789C45.5734 3.37515 37.9518 0.209481 30 0.194031ZM39.6339 31.8956L28.0954 42.2802C27.6675 42.6651 27.1139 42.8806 26.5385 42.8863C26.218 42.8876 25.9009 42.8214 25.6078 42.6921C25.3146 42.5627 25.052 42.3731 24.8369 42.1356C24.6322 41.912 24.4735 41.6502 24.3699 41.3652C24.2664 41.0803 24.22 40.7777 24.2334 40.4748C24.2468 40.1719 24.3198 39.8747 24.4482 39.6C24.5766 39.3253 24.7578 39.0786 24.9815 38.874L34.6154 30.194L24.9815 21.511C24.5541 21.0922 24.3061 20.5237 24.2897 19.9255C24.2734 19.3274 24.4901 18.7462 24.894 18.3047C25.298 17.8633 25.8576 17.596 26.4549 17.5592C27.0522 17.5225 27.6404 17.7192 28.0954 18.1079L39.6339 28.4925C39.8698 28.7087 40.0583 28.9716 40.1872 29.2645C40.3161 29.5574 40.3826 29.874 40.3826 30.194C40.3826 30.5141 40.3161 30.8306 40.1872 31.1235C40.0583 31.4165 39.8698 31.6794 39.6339 31.8956Z" fill="url(#paint0_linear_1_173)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_173" x1="30" y1="0.194031" x2="30" y2="60.194" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#06286E" />
                                        <stop offset="1" stopColor="#164EC0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </span>
                    </div>


                    <span className='inline-block small-svg'>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z" fill="url(#paint0_linear_1_174)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_174" x1="15" y1="0.194031" x2="15" y2="30.194" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06286E" />
                                    <stop offset="1" stopColor="#164EC0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </span>
                </div>



            </div>

            <div className='flex justify-between px-9 mt-16 '>
                <div className='flex items-center gap-3'>
                    <div className=' small-shadow shadow-[0_0_31px_0_rgba(8,56,153,0.4)] w-[80.6px] h-[80.6px] bg-[#FFFFFF] rounded-full '>
                        <img src="./image/logo.png" alt="log" className='w-full h-full m-auto mt-1' />
                    </div>
                    <div>
                        <p className='text-[12.4px] leading-[15.01px] font-bold text-small '> Published by</p>
                        <p className=' mb-2 flex items-center small  '>
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
                    </div>
                </div>


                <div className='flex items-center gap-2'>
                    <div className='size'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0001 -0.00019455C11.2001 -0.00019455 9.15527e-05 11.1998 9.15527e-05 24.9998C9.15527e-05 38.7998 11.2001 49.9998 25.0001 49.9998C38.8001 49.9998 50.0001 38.7998 50.0001 24.9998C50.0001 11.1998 38.8001 -0.00019455 25.0001 -0.00019455ZM37.5001 27.4998H27.5001V37.4998H22.5001V27.4998H12.5001V22.4998H22.5001V12.4998H27.5001V22.4998H37.5001V27.4998Z" fill="url(#paint0_linear_1_203)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_203" x1="25.0001" y1="-0.00019455" x2="25.0001" y2="49.9998" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06286E" />
                                    <stop offset="1" stopColor="#164EC0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <div className="flashcard ">
                        Create Flashcard
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Slider