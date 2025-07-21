import { useMemo } from 'react';

import { getActions, getMenu, useModal } from '@store/index';

const MenuItem = ({ name, icon: svg, isModal, ariaLabel }) => {
  const { setMenu, setModal } = getActions();
  const menu = getMenu();
  const modal = useModal();

  const isActive = isModal ? modal === name : menu === name && !modal;
  const className = isActive ? 'opacity-100 text-black' : 'opacity-50 text-black';

  const icon = useMemo(() => svg, [svg]);

  return (
    <li onClick={() => (isModal ? setModal(name) : setMenu(name))}>
      <button
        className={`*:h-6 *:w-6 ${className} focus:bg-transparent focus:text-black`}
        type="button"
        aria-label={`${ariaLabel}`}
      >
        {icon}
      </button>
    </li>
  );
};

export default MenuItem;