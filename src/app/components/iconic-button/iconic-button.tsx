import { useAnimation } from 'framer-motion';
import { SyncLoader } from 'react-spinners';

import {
  IconicButtonRouterLink,
  IconicButtonBtn,
  IconicButtonContainer,
  IconicButtonLink,
  Icon,
  Content,
  Loader,
} from './iconic-button.styles';

interface IconicButtonProps {
  onClick?: () => void;
  rounded?: boolean;
  inverted?: boolean;
  loading?: boolean;
  linkTo?: string;
  content?: string;
  btnSize?: 'small' | 'medium' | 'large';
  btnType?: 'download' | 'link' | 'routerLink' | 'action';
  btnLook?: 'emphasized' | 'primary' | 'secondary';
}

export const IconicButton: React.FC<IconicButtonProps> = ({
  onClick,
  rounded,
  btnSize,
  btnType = 'action',
  content,
  linkTo,
  btnLook,
  inverted,
  loading,
}) => {
  const buttonControls = useAnimation();

  let bgColor = '';

  if (btnType === 'download') {
    bgColor = 'var(--iconic-pink)';
  } else if (btnType === 'action') {
    bgColor = 'var(--iconic-yellow)';
  } else if (btnType === 'link') {
    bgColor = 'var(--iconic-lightorange)';
  } else if (btnType === 'routerLink') {
    bgColor = 'var(--iconic-green)';
  }

  return (
    <IconicButtonContainer
      onHoverStart={() => {
        buttonControls.start({
          filter: 'hue-rotate(360deg)',
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          },
        });
      }}
      onHoverEnd={() => {
        buttonControls.start({
          filter: 'hue-rotate(0deg)',
        });
      }}
      animate={buttonControls}
    >
      {btnType === 'action' && (
        <IconicButtonBtn
          onClick={onClick}
          $btnLook={btnLook}
          $bgColor={bgColor}
          $btnSize={btnSize}
          $inverted={inverted}
          $rounded={rounded}
        >
          {loading && (
            <Loader>
              <SyncLoader
                color="var(--iconic-darkblue)"
                loading={loading}
                size="0.6em"
              />
            </Loader>
          )}
          <Content $loading={loading}>{content ? content : 'Button'}</Content>
        </IconicButtonBtn>
      )}
      {(btnType === 'download' || btnType === 'link') && (
        <IconicButtonLink
          href={
            (btnType === 'link' || btnType === 'download') && linkTo
              ? linkTo
              : '/'
          }
          target="_blank"
          $btnLook={btnLook}
          $bgColor={bgColor}
          $btnSize={btnSize}
          $inverted={inverted}
          $rounded={rounded}
        >
          {btnType === 'download' && <Icon />}
          {content ? content : 'Link'}
        </IconicButtonLink>
      )}
      {btnType === 'routerLink' && (
        <IconicButtonRouterLink
          to={btnType === 'routerLink' && linkTo ? linkTo : '/'}
          $btnLook={btnLook}
          $bgColor={bgColor}
          $btnSize={btnSize}
          $inverted={inverted}
          $rounded={rounded}
        >
          {content ? content : 'Router Link'}
        </IconicButtonRouterLink>
      )}
    </IconicButtonContainer>
  );
};
