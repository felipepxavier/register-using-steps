import { Sidebar } from 'components/Sidebar';
import * as S from './styles';

type LayoutProps = {
  children: JSX.Element;
};
function LayoutDefault({ children }: LayoutProps) {
  return (
    <S.Container>
      <Sidebar />
      {children}
      <S.Footer>
        Loren ipsun © 2022 All rights reserved | Privacy Policy
      </S.Footer>
    </S.Container>
  );
}

export { LayoutDefault };
