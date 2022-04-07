import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 1.1rem 0 1.6rem;
  background-color: var(--secondary);
  
  box-shadow: 0rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 2.8rem;
  height: 2.8rem;
  
  color: var(--white);
  cursor: pointer
`;
