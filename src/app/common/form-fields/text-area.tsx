import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  FormFieldContainer,
  FormFieldLabel,
  CommonStyles,
} from './form-fields.styles';

const TextAreaBlock = styled.textarea`
  ${CommonStyles}

  position: relative;
  resize: vertical;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--iconic-lightblue);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--iconic-darkblue);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #21424b;
  }

  ::-webkit-scrollbar-button {
  }

  ::-webkit-resizer {
  }
`;

interface TextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  placeholder,
}) => {
  const [rows, setRows] = useState<number>(4);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <TextAreaBlock
        onChange={(e) => {
          if (
            textAreaRef.current &&
            textAreaRef.current.scrollHeight > textAreaRef.current.clientHeight
          ) {
            setRows(rows + 1);
          }
        }}
        ref={textAreaRef}
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    </FormFieldContainer>
  );
};
