import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import {
  ButtonContainer,
  ContactFormContainer,
  ContactFormHeading,
} from './contact-form.styles';
import { TextInput, TextArea, HiddenInput } from '../../app/common/form-fields';
import { GlassButton } from '../../app/components/glass-button';
import { useAnimation } from 'framer-motion';

interface FormValues {
  name: string;
  company: string;
  email: string;
  message: string;
}

const buttonVariants = {
  disappear: {
    scale: [1, 0.8, 1.1, 1],
    transition: {
      type: 'spring',
      duration: 0.8,
      bounce: 1,
    },
  },
};

export const ContactForm = () => {
  const buttonControls = useAnimation();

  const sendEmail = (values: any) => {
    emailjs
      .send(
        'service_do95f1d',
        'template_nxwok15',
        values,
        'user_JsusNz0E8HNccYZdyYeKy'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Formik
      initialValues={{ name: '', company: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        company: Yup.string().required(),
        email: Yup.string().required().email(),
        message: Yup.string().required(),
      })}
      onSubmit={async (
        values: FormValues,
        { setSubmitting, setErrors, resetForm }: FormikHelpers<FormValues>
      ) => {
        try {
          await sendEmail(values);
          setSubmitting(false);
          buttonControls.start('disappear');
          resetForm({});
        } catch (error) {
          setErrors(error.message);
          setSubmitting(false);
        }
      }}
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
          <ButtonContainer variants={buttonVariants} animate={buttonControls}>
            <GlassButton
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              beamColor="var(--iconic-paleblue)"
              content="Send"
            />
          </ButtonContainer>
        </ContactFormContainer>
      )}
    </Formik>
  );
};
