import { Container } from './page-container.styles';

interface PageContainerProps {
  children: React.ReactNode;
  width: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  width,
}) => {
  return <Container width={width}>{children}</Container>;
};
