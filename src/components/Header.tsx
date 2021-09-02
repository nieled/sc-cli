import React, { FC, ReactElement } from 'react';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }): ReactElement => {
  return <div>{title}</div>;
};

export default Header;
