import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface CountdownTimerProps {
  expirationDate: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expirationDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = expirationDate - now;

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
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
    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="left-[15px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          </div>
          <div className="w-8 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">
            Hours
          </div>
        </div>
      </div>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="h-[34px] left-[10px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          </div>
          <div className="w-[43px] text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">
            Minutes
          </div>
        </div>
      </div>
      <div className="w-[62px] h-[62px] relative">
        <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="h-[34px] left-[7px] top-[14px] absolute flex-col justify-start items-center inline-flex">
          <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
          <div className="w-12 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCountdown2: React.FC = () => {
  // Set the expiration date to a specific date and time
  const expirationDate = new Date("2024-12-31T23:59:59").getTime();

  return (
    <div>
      <CountdownTimer expirationDate={expirationDate} />
    </div>
  );
};

export default ProductCountdown2;
