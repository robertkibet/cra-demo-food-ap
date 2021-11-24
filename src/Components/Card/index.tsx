import React, { ReactChildren, ReactChild } from 'react';
import Text from '../Text';
import { Avatar, ProfileCard } from './styles';

interface ProfileCardProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  avatar:string;
}

const Card = function ({ children, avatar }:ProfileCardProps) {
    return (
      <ProfileCard>
        <Avatar><Text title={avatar || 'U'} fontWeight="600" /></Avatar>
        {children}
      </ProfileCard>
    );
};

export default Card;
