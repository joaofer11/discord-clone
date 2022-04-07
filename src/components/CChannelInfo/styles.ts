import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;
  
  display: flex;
  align-items: center;
  
  padding: 0 1.7rem;
  background-color: var(--primary);
  
  box-shadow: rgba(0, 0, 0, 0.2) 0rem 0.1rem 0rem 0rem;
  z-index: 2;
`;
export const HashTagIcon = styled(Hashtag)`
  width: 2.4rem;
  height: 2.4rem;
  
  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 0.9rem;
  
  font-size: 1.6rem;
  font-weight: bold;
  
  color: var(--white);
`;


export const Separator = styled.div`
  width: 0.1rem;
  height: 2.4rem;
  
  background-color: var(--white);
  opacity: 0.2;
  
  margin: 0 1.3rem;
`;

export const Description = styled.span`
  font-size: 1.5rem;
  color: var(--gray);
`;
