import styled from 'styled-components';

import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: var(--primary);
`; 

export const Messages = styled.div`
  padding: 2.0rem 0;
  
  display: flex;
  flex-direction: column;
  
  max-height: calc(100vh - 4.6rem - 6.8rem);
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 0.4rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`; 

export const InputWrapper = styled.div`
  width: 100 % ;
  
  padding: 0 1.6rem;
`; 

export const Input = styled.input`
  width: 100%;
  height: 4.4rem;
  
  padding: 0 1.0rem 0 5.7rem;
  border-radius: 0.7rem;
  
  color: var(--white);
  background-color: var(--chat-input);
  
  position: relative;
  
  &::placeholder {
    color: var(--gray);
  }
  
  ~ svg {
    position: relative;
    top: -50%;
    left: 1.4rem;
    transition: 180ms ease-in-out;
  }
`; 

export const InputIcon = styled(AlternateEmail)`
  width: 2.4rem;
  height: 2.4rem;
  
  color: var(--gray);
`;
