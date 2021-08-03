import {
  GlassButtonContainer,
  GlassButtonLink,
  GlassButtonBtn,
  GlassButtonProps,
} from './glass-button.styles';

export const GlassButton: React.FC<GlassButtonProps> = ({
  onClick,
  linkTo,
  beamColor,
  type,
  content,
  disabled,
}) => {
  return (
    <GlassButtonContainer
      beamColor={disabled ? 'var(--iconic-red)' : beamColor}
    >
      {linkTo ? (
        <GlassButtonLink to={linkTo}>Read More</GlassButtonLink>
      ) : (
        <GlassButtonBtn onClick={onClick} type={type} disabled={disabled}>
          {content ? content : 'Click'}
        </GlassButtonBtn>
      )}
    </GlassButtonContainer>
  );
};
