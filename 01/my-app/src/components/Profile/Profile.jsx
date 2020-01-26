import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/202366/a9bf969b-259c-4f89-ab25-314ba79e25ee/orig"></img>
      </div>
      <div className={s.profile__wrapper}>
        <div>ava + description</div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
