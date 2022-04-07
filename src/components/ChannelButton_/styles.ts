import styled from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  cursor: pointer;
  
  padding: 0.5rem 0.3rem;
  border-radius: 0.5rem;
  
  background-color: transparent;
  
  transition: background-color 0.2s;
  
  > div {
    display: flex;
    align-items: center;
  }
  
  > div span {
    margin-left: 0.5rem;
    
    font-size: 1.5rem;
    color: var(--senary);
  }
  
  &:hover, 
  &.active {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white);
    }
  }
  
`;
export const HashtagIcon = styled(Hashtag)`
  width: 2.0rem;
  height: 2.0rem;
  
  color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
  width: 1.6rem;
  height: 1.6rem;
  
  color: var(--symbol);
  cursor: pointer;
  
  transition: color 0.2s;
  
  &:hover {
    color: var(--white);
  }
`;
export const SettingsIcon = styled(Settings)`
  width: 1.6rem;
  height: 1.6rem;
  
  margin-left: 0.4rem;
  
  color: var(--symbol);
  cursor: pointer;
  
  transition: color 0.2s;
  
  &:hover {
    color: var(--white);
  }
`;
