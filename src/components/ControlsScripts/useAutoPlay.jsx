import { useEffect } from "react";

const useAutoPlay = ({ isPlaying, setStageIndex, uniqueStages }) => {
  useEffect(() => {
    let intervalId;

    if (isPlaying && uniqueStages.length > 0) {
      intervalId = setInterval(() => {
        setStageIndex((prevIndex) =>
          prevIndex >= uniqueStages.length - 1 ? 0 : prevIndex + 1,
        );
      }, 800);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, uniqueStages.length, setStageIndex]);
};

export default useAutoPlay;
