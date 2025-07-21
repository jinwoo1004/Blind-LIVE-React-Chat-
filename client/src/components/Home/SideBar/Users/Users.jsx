import { memo } from 'react';

import {
  getAuthUser,
  useCurrentRoom,
  useIsUsersLoading,
  useUsers,
} from '@store/index';

import Loading from '@components/Common/Loading';
import User from '@components/Home/SideBar/Users/User';

const Users = memo(function Users() {
  const currentRoom = useCurrentRoom();
  const authUser = getAuthUser();
  const isUsersLoading = useIsUsersLoading();
  const users = useUsers();

  const contentClassName = currentRoom ? 'collapse-content bg-white text-black p-0' : '';
  const titleClassName = !currentRoom ? 'hidden' : '';

  return (
    <>
      {!isUsersLoading ? (
        <>
          {/* 전체 유저 collapse */}
          <dl className="collapse collapse-arrow bg-white text-black rounded-md border border-gray-300 mt-4">
            <input type="checkbox" className={`${titleClassName} peer`} />
            <dt
              className={`${titleClassName} collapse-title bg-white text-black peer-checked:bg-white`}
            >
              전체 유저
            </dt>

            <ul
              className={`${contentClassName}`}
            >
              <User key={authUser.id} user={authUser} isAuthUser />
              {users.map(user => {
                const { id } = user;
                return <User key={id} user={user} />;
              })}
            </ul>
          </dl>

          {/* 채팅방 유저 collapse */}
          {currentRoom && (
            <dl className="collapse collapse-arrow bg-white text-black rounded-md border border-gray-300 mt-4">
              <input type="checkbox" className="peer" defaultChecked />
              <dt className="collapse-title bg-white text-black peer-checked:bg-white">
                채팅방 참여유저
              </dt>
              <ul className="collapse-content bg-white text-black p-0">
                <User key={authUser.id} user={authUser} isAuthUser />
                {users.map(user => {
                  const { id } = user;
                  const isJoined = currentRoom.users.includes(id);
                  return isJoined && <User key={id} user={user} />;
                })}
              </ul>
            </dl>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
});

export default Users;