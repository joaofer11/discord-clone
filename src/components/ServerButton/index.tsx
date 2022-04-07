import React from 'react';

import Logo from '../../assets/MyLogo.png';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && 
      <div>
        <img src={Logo} alt="RocketSeat" />
      </div>}
    </Button>
  );
};

export default ServerButton;
