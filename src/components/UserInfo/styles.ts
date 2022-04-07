import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1.0rem;
  background-color: var(--quaternary);
  box-shadow: 0rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.2);
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  
  background-color: var(--gray);
`;
export const UserData = styled.div`
  margin-left: 0.8rem;
  
  display: flex;
  flex-direction: column;
  
  > strong {
    display: block;
    
    color: var(--white);
    font-size: 1.3rem;
  }
  
  > span {
    color: var(--gray);
    font-size: 1.3rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  
  > svg + svg {
    margin-left: 0.7rem;
  }
`;

export const MicIcon = styled(Mic)`
  width: 2.0rem;
  height: 2.0rem;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 2.0rem;
  height: 2.0rem;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 2.0rem;
  height: 2.0rem;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;
