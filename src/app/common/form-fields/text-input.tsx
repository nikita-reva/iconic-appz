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

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  type,
  placeholder,
}) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="none"
      />
    </FormFieldContainer>
  );
};
