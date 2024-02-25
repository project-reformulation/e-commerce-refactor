import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  expirationDate: any;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expirationDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = expirationDate - now;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [expirationDate]);

  return (
    <div>
      <div className="w-[302px] h-[50px] relative">
        <div className="w-[46px] left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[31px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
            Days
          </div>
          <div className="w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
            03
          </div>
        </div>
        <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[35px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
            Hours
          </div>
          <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[49px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
            Minutes
          </div>
          <div className="w-[39px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[52px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
            Seconds
          </div>
          <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <div className="left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <div className="left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};


  const ProductCountdown: React.FC = () => {
    // Set the expiration date to a specific date and time
    const expirationDate: Date = new Date('2024-12-31T23:59:59');
  
    return (
      <div>
        <CountdownTimer key={expirationDate.toString()} expirationDate={expirationDate} />
      </div>
    );
  };
  
  export default ProductCountdown;