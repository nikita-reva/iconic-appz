import { useState } from 'react';
import {
  BackgroundContainer,
  ContentContainer,
  PageContainer,
} from '../../../common';
import IconicButton from '../../../components/iconic-button';
import ImageSlider from '../../../components/image-slider';

export const HomePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PageContainer>
        <BackgroundContainer bgColor="var(--iconic-blue)">
          <ContentContainer>
            <IconicButton
              btnSize="large"
              btnType="download"
              btnLook="primary"
              linkTo="/assets/niko_reva-cv-2021.pdf"
              content="Download my CV"
              rounded
            />
            <IconicButton
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 1500);
              }}
              loading={loading}
              btnSize="large"
              btnType="action"
              btnLook="primary"
              content="Do something"
              rounded
            />
            <IconicButton
              btnSize="large"
              btnType="routerLink"
              btnLook="primary"
              rounded
              linkTo="/team"
              content="More about us"
            />
            <IconicButton
              btnSize="large"
              btnType="link"
              btnLook="primary"
              rounded
              linkTo="https://github.com/nikita-reva"
              content="My GitHub"
            />
          </ContentContainer>
        </BackgroundContainer>
      </PageContainer>
      <PageContainer>
        <ContentContainer>
          <ImageSlider rounded />
        </ContentContainer>
      </PageContainer>
    </>
  );
};
