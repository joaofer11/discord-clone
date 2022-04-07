import React from 'react';

import { 
  Container, 
  Profile, 
  Avatar, 
  UserData,
  Icons,
  MicIcon, 
  HeadphoneIcon, 
  SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>João Fernandes</strong>
          <span>#72619</span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo
