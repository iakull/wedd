'use client'
import React from 'react';
import Timer from "@/components/Timer/Timer";

const Welcome = () => {
    return (<>
        <div id='welcome' className='transition-all duration-500 ease-out w-full h-full'>
            <div className='h-screen m-auto w-full transition-all'>
                <div className='w-full h-full'>
                    <div
                        className='z-5 animate-c mr-0 w-full m-auto absolute right-0 h-full overflow-hidden bg-no-repeat'>
                        <div
                            className='bg-top transition-all duration-100 ease-out scale-[1.3] bg-welcome top-[13%] m-auto relative w-[90%] h-[72%] bg-no-repeat text-center bg-contain'></div>
                    </div>
                    <div className='flex flex-col h-full max-w-[320px] m-auto p-5 z-10 relative text-brown'>
                        <p className='animate-d absolute left-[25%] mobile-s:top-[23%] mobile-s2:top-[27%] mobile-s3:left-[20%] mobile-s:text-[35px] mobile-s3:text-[40px] text-center font-scriptorama text-[40px] flex flex-col '>Иван<span
                            className='text-[19px] pt-[10px] animate-d'>&</span>Анастасия
                        </p>
                        <p className='animate-d absolute bottom-[20%] mb-[40px] flex flex-col font-comic-neue uppercase text-[10px] tracking-widest text-black'>Приглашаем
                            на свадьбу <span
                                className='text-[40px] font-scriptorama lowercase text-black'>9 августа 2024</span>
                        </p>
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Welcome;
