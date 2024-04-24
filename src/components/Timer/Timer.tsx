import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<{
        weeks?: number,
        days?: number,
        hours?: number,
        minutes?: number,
        seconds?: number
    }>({});

    const calculateTimeLeft = () => {
        const expiryDate = new Date('2024-08-09T00:00:00Z');
        const now = new Date();
        const timezoneOffset = now.getTimezoneOffset() * 60000;
        const localNow = now.getTime() - timezoneOffset;

        const difference = expiryDate.getTime() - localNow;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
                days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const addLeadingZero = (value: number) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    return (
        <div
            className='animate-q absolute bottom-[10%] m-0 bg-whitealpha flex justify-center font-comic-neue rounded-[40px] text-brown'>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold'>
                    {addLeadingZero(timeLeft.weeks ?? 0)}
                </span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>недель</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold'>
                    {addLeadingZero(timeLeft.days ?? 0)}
                </span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>дней</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold'>
                    {addLeadingZero(timeLeft.hours ?? 0)}
                </span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>часов</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold'>
                    {addLeadingZero(timeLeft.minutes ?? 0)}
                </span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>минут</span>
            </div>
            <div className='flex flex-col text-center'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold'>
                    {addLeadingZero(timeLeft.seconds ?? 0)}
                </span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>секунд</span>
            </div>
        </div>
    );
};

export default Timer;
