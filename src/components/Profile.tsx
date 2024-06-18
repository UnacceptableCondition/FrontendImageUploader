import React, { useEffect, useMemo, useState } from "react";
import { ImageUploader } from "./image-uploader/ImageUploader.tsx";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const useTime = () => {
  const [time, setTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());

      return () => clearInterval(id);
    }, 1000);
  }, []);

  return time;
};

const Profile = () => {
  const time = useTime();

  const userInfo = useMemo(() => (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <ImageUploader></ImageUploader>
      </>
    ), []);

  return (
    <>
      {userInfo}
      <div className="clock">{time.toLocaleString()}</div>
    </>
  );
};

export { Profile };
