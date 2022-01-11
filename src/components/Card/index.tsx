/* eslint-disable react/require-default-props */
import * as S from './styles';

type CardProps = {
  children: JSX.Element;
  type?: 'small' | 'medium' | 'large';
};

function Card({ children, type = 'small' }: CardProps) {
  return <S.Container type={type}>{children}</S.Container>;
}

export { Card };
