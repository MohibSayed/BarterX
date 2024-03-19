import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./CounterItem.css";

const Counteritem = ({
  startCount,
  endCount,
  countTitle,
  plus,
  aboveThousand,
  duration,
}) => {
  return (
    <CountUp start={startCount} end={endCount} duration={duration}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
          <>
            <div className="common_actual_count">
              <span ref={countUpRef} />
              <span>{aboveThousand ? "K" : ""}</span>
              <span>{plus ? "+" : ""}</span>
            </div>
            <div className="common_count_title">{countTitle}</div>
          </>
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counteritem;
