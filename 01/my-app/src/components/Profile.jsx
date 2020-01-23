import React from 'react';

const Profile = () => {
    return (
        <div className = 'content'>
        <div>
        <img src = "https://avatars.mds.yandex.net/get-pdb/202366/a9bf969b-259c-4f89-ab25-314ba79e25ee/orig"></img>     
        </div>
        <div className = "profile__wrapper">
        <div>
          ava + description
        </div>
        <div>
          My posts
        </div>
        <div>
          New post
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
        </div>
        </div>
    );
}

export default Profile;