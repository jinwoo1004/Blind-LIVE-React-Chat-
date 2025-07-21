import { memo } from 'react';
import { AiOutlineDelete, AiOutlineHome } from 'react-icons/ai';

import { getActions } from '@store/index';

import Divider from '@components/Common/Divider';

const Header = memo(function ChatTopInfo({ currentRoom, authUser }) {
  const { title, createdUser } = currentRoom;
  const { setCurrentRoom, setModal } = getActions();
  const isHost = createdUser.id === authUser.id;

  return (
    <>
      <header className="flex items-center justify-between bg-white px-1 text-black">
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-bold text-black">{title}</h1>
          <p className="text-sm font-medium text-black">
            {createdUser.name} {isHost && <span>👑</span>}
          </p>
        </div>

        <div className="join">
          <button
            className="btn join-item btn-sm text-black"
            onClick={() => setCurrentRoom(null)}
          >
            <AiOutlineHome className="h-5 w-5" />
          </button>
          {createdUser.id === authUser.id && (
            <button
              className="btn join-item btn-sm text-black"
              onClick={() => setModal('removeRoom')}
            >
              <AiOutlineDelete className="h-5 w-5" />
            </button>
          )}
        </div>
      </header>
      <Divider isGray />
    </>
  );
});

export default Header;