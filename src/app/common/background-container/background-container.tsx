import { Container } from './background-container.styles';

interface BackgroundContainerProps {
  bgColor?: string;
  children?: React.ReactNode;
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  bgColor,
  children,
}) => {
  return <Container bgColor={bgColor}>{children}</Container>;
};
