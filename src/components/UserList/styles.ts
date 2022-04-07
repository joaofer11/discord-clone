import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  
  display: flex;
  flex-direction: column;
  
  padding: 0.3rem 0.6rem 0 1.6rem;
  background-color: var(--secondary);
  
  max-height: calc(100vh - 4.6rem);
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 0.4rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.div`
  margin-top: 2.0rem;
  
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  
  display: flex;
  align-items: center;
  
  cursor: pointer;
  
  border-radius: 0.4rem;
  background: transparent;
  
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  > strong {
    margin-left: 1.3rem;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  > span {
    margin-left: 0.9rem;
    
    background-color: var(--discord);
    color: var(--white);
    border-radius: 0.4rem;
    padding: 0.4rem 0.5rem;
    
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  
  width: 3.2rem;
  height: 3.2rem;
  
  border-radius: 50%;
  background-color: var(--primary);
  
  &.bot {
    background-color: var(--mention-detail);
  }
`; 
