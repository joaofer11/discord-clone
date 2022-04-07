import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton_';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="pubg" />
      <ChannelButton channelName="cod:warzone" />
      <ChannelButton channelName="mk11" />

    </Container>
  );
};

export default ChannelList;
