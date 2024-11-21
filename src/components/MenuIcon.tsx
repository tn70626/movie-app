import React from 'react';

import './menu-icon.scss';

type MenuIconProps = {
  active?: boolean;
  toggleActive: () => void;
};
const MenuIcon: React.FC<MenuIconProps> = ({
  active = false,
  toggleActive,
}) => {
  return (
    <button
      onClick={toggleActive}
      className={active ? 'menu-icon open' : 'menu-icon'}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuIcon;
