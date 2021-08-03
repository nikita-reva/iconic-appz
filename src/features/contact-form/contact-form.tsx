import { Formik } from 'formik';
import {
  ContactFormContainer,
  ContactFormHeading,
} from './contact-form.styles';
import * as Yup from 'yup';
import { TextInput, TextArea, HiddenInput } from '../../app/common/form-fields';

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', company: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        company: Yup.string(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {}}
    >
      {({ isSubmitting, isValid, dirty, errors }) => (
        <ContactFormContainer autoComplete="none">
          <ContactFormHeading>Send me a Message</ContactFormHeading>
          <TextInput
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name..."
          />
          <TextInput
            name="company"
            label="Company Name"
            type="text"
            placeholder="Enter your company name..."
          />
          <TextInput
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email address..."
          />
          <TextArea
            name="message"
            label="Message"
            placeholder="Enter your message..."
          />
          <HiddenInput />
        </ContactFormContainer>
      )}
    </Formik>
  );
};
