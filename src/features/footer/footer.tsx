import { ContentContainer } from '../../app/common';
import ContactForm from '../contact-form';
import { FooterContainer, FooterContent } from './footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterContent>
          <ContactForm />
        </FooterContent>
      </ContentContainer>
    </FooterContainer>
  );
};
