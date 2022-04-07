import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage_';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    const div = messagesRef.current;
    
    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="João Fernandes"
            date="06/04/2022"
            content="O jeito é estudar para não ser a vergonha da profission."
          />
        ))}
        
        <ChannelMessage 
          author="Bot aleatorio"
          date="06/04/2022"
          content={
            <>
              <Mention>@João Fernandes</Mention>, à aplicação ficou muito massa!
            </>
          }
          hasMention
          isBot
        />
        
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
