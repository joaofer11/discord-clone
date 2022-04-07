import styled from 'styled-components';

import { Props } from '.'

export const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  
  margin-bottom: 0.8rem;
  
  background-color: ${(props) => 
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
    
  position: relative;
  cursor: pointer;
  
  > div {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
  
  > div > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
    
    width: 0.9rem;
    height: 0.9rem;
    
    position: absolute;
    left: -1.7rem;
    top: calc(50% - 0.45rem);
    
    background-color: var(--white);
    border-radius: 50%;
  }
  
  &::after {
    content: '${props => props.mentions && props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    
    background-color: var(--notification);
    width: auto;
    height: 1.6rem;
    
    padding: 0 0.4rem;
    
    position: absolute;
    bottom: -0.4rem;
    right: -0.4rem;
    
    border-radius: 1.2rem;
    border: 0.4rem solid var(--quaternary);
    
    text-align: right;
    
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--white);
  }
  
  transition: border-radius 0.2s, background-color 0.2s;
  
  &.active, 
  &:hover {
    border-radius: 1.6rem;
    background-color: ${props => 
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
  };
`;
