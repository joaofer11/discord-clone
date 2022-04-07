import styled from 'styled-components';

import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  
  display: flex;
  flex-direction: column;
  
  padding: 2.4rem 0.95rem 0 1.6rem;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 0.6rem;
  
  > span {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 2.1rem;
  height: 2.1rem;
  
  color: var(--symbol);
  cursor: pointer;
`;
