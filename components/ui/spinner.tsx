"use client";

import { BeatLoader, CircleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center align-center mt-60">
      <CircleLoader
                  color="#000000" 
                  speedMultiplier={1}
      />
    </div>
  );
};

export default Spinner;