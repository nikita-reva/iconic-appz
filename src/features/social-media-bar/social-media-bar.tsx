import { VscGithub } from 'react-icons/vsc';
import { GrInstagram, GrLinkedinOption } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';

import {
  IconContainer,
  Beam,
  SocialMediaBarContainer,
  SocialMediaBarElements,
  Reflection,
} from './social-media-bar.styles';
import { useAnimation } from 'framer-motion';
import {
  containerVariants,
  beamVariants,
  reflectionVariants,
} from './social-media-bar.animations';
import { useClickOutsideRef } from '../../app/hooks';

interface SocialMediaBarProps {
  beamColor?: string;
}

export const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  beamColor,
}) => {
  const containerControls = useAnimation();
  const beamControls = useAnimation();
  const reflectionControls = useAnimation();
  const clickOutsideRef = useClickOutsideRef(() => {
    beamControls.start('hoverEnd');
    containerControls.start('hoverEnd');
    reflectionControls.start('hoverEnd');
  });

  return (
    <SocialMediaBarContainer
      ref={clickOutsideRef}
      variants={containerVariants}
      initial="initial"
      animate={containerControls}
      onHoverStart={(e) => {
        containerControls.start('hoverStart');
        beamControls.start('hoverStart');
        reflectionControls.start('hoverStart');
      }}
      onHoverEnd={(e) => {
        beamControls.start('hoverEnd');
        containerControls.start('hoverEnd');
        reflectionControls.start('hoverEnd');
      }}
      onTap={(e) => {
        containerControls.start('hoverStart');
        beamControls.start('hoverStart');
        reflectionControls.start('hoverStart');
      }}
    >
      <Beam
        beamColor={beamColor}
        variants={beamVariants}
        animate={beamControls}
      />
      <SocialMediaBarElements>
        <Reflection
          variants={reflectionVariants}
          initial={'initial'}
          animate={reflectionControls}
        />
        <IconContainer href="https://github.com/nikita-reva" target="_blank">
          <VscGithub />
        </IconContainer>
        <IconContainer
          href="https://www.linkedin.com/in/niko-reva-291275169/"
          target="_blank"
        >
          <GrLinkedinOption />
        </IconContainer>
        <IconContainer
          href="https://www.instagram.com/iconicappz/"
          target="_blank"
        >
          <GrInstagram />
        </IconContainer>
        <IconContainer href="https://twitter.com/NiketasR" target="_blank">
          <FiTwitter />
        </IconContainer>
      </SocialMediaBarElements>
    </SocialMediaBarContainer>
  );
};
