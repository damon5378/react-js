import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/202366/a9bf969b-259c-4f89-ab25-314ba79e25ee/orig"></img>
      </div>
      <div className={s.profile__wrapper}>
        <div className = {s.description}>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
