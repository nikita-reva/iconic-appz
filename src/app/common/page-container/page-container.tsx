import { Container } from './page-container.styles';

interface PageContainerProps {
  children?: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
