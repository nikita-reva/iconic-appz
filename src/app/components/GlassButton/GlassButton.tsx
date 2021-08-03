import {
  GlassButtonContainer,
  GlassButtonLink,
  GlassButtonBtn,
  GlassButtonProps,
} from './GlassButton.styles';

export const GlassButton: React.FC<GlassButtonProps> = ({
  onClick,
  linkTo,
  beamColor,
  type,
  content,
}) => {
  return (
    <GlassButtonContainer beamColor={beamColor}>
      {linkTo ? (
        <GlassButtonLink to={linkTo}>Read More</GlassButtonLink>
      ) : (
        <GlassButtonBtn onClick={onClick} type={type}>
          {content ? content : 'Click'}
        </GlassButtonBtn>
      )}
    </GlassButtonContainer>
  );
};
