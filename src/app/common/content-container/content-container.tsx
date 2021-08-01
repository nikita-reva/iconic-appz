import { Container } from './content-container.styles';

interface ContentContainerProps {
  children?: React.ReactNode;
  width?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  width,
}) => {
  return <Container width={width}>{children}</Container>;
};
