import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import {
  ButtonContainer,
  Feedback,
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
  confirm: {
    scale: [1, 0.8, 1.1, 1],
    transition: {
      type: 'spring',
      duration: 0.8,
      bounce: 1,
    },
  },
};

const feedbackVariants = {
  initial: { opacity: 0, y: 24 },
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
  disappear: {
    opacity: 0,
    y: 24,
    transition: {
      duration: 0.8,
    },
  },
};

export const ContactForm = () => {
  const buttonControls = useAnimation();
  const feedbackControls = useAnimation();

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
          feedbackControls.start('appear');

          setTimeout(() => {
            feedbackControls.start('disappear');
          }, 3000);

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
          buttonControls.start('confirm');
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
            <Feedback
              initial="initial"
              variants={feedbackVariants}
              animate={feedbackControls}
            >
              Message sent!
            </Feedback>
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
