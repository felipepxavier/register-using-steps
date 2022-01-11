import { Sidebar } from 'components/Sidebar';
import { Container } from './styles';

type LayoutProps = {
  children: JSX.Element;
};
function LayoutDefault({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
}

export { LayoutDefault };
