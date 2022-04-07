import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  padding: 0.4rem 1.6rem;
  margin-right: 0.4rem;
  
  background-color: transparent;
  
  &.mention {
    background-color: var(--mention-message);
    
    border-left: 0.2rem solid var(--mention-detail);
    padding-left: 1.4rem;
  }
  
  & + div {
    margin-top: 1.3rem;
  }
`; 

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 4.0rem;
  height: 4.0rem;
  
  background-color: var(--secondary);
  border-radius: 50%;
  
  &.bot {
    background-color: var(--mention-detail);
  }
`; 

export const Message = styled.div`
  min-height: 4.0rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin-left: 1.7rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  
  > strong {
    color: var(--white);
    font-size: 1.6rem;
  }
  
  > span {
    margin-left: 0.6rem;
    
    background-color: var(--discord);
    color: var(--white);
    border-radius: 0.4rem;
    padding: 0.4rem 0.5rem;
    
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  > time {
    margin-left: 0.6rem;
    color: var(--gray);
    font-size: 1.3rem;
  }
`; 

export const Content = styled.div`
  text-align: left;
  font-size: 1.6rem;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
