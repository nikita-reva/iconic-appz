import { useField } from 'formik';
import styled from 'styled-components';
import {
  FormFieldContainer,
  FormFieldLabel,
  CommonStyles,
} from './form-fields.styles';

const Input = styled.input`
  ${CommonStyles}
`;

interface TextInputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <Input {...field} {...props} autoComplete="none" />
    </FormFieldContainer>
  );
};
