import { useRef, useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { TiPlus, TiMinus } from 'react-icons/ti';

import {
  FormFieldContainer,
  FormFieldLabel,
  CommonStyles,
} from './form-fields.styles';

const TextAreaWrapper = styled.div`
  position: relative;
`;

const TextAreaBlock = styled.textarea`
  ${CommonStyles}

  resize: none;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--iconic-paleblue);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--iconic-darkblue);
    border-radius: 12px;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--iconic-darkblue);
  }

  &:focus {
    & + * {
      opacity: 0.2;
    }
  }
`;

const RowsControls = styled.div`
  position: absolute;
  right: 4px;
  bottom: 6px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`;

const RowButton = styled.div`
  border-radius: 50%;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 2px;
  margin: 1px 0;
  background: var(--iconic-darkblue);
  color: var(--iconic-paleblue);
  display: grid;
  place-items: center;
`;

interface TextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  const [rows, setRows] = useState<number>(4);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const [field, meta] = useField(props);

  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <TextAreaWrapper>
        <TextAreaBlock
          onInput={(e) => {
            if (
              textAreaRef.current &&
              textAreaRef.current.scrollHeight >
                textAreaRef.current.clientHeight
            ) {
              setRows(rows + 1);
            }
          }}
          ref={textAreaRef}
          {...field}
          {...props}
          rows={rows}
        />
        <RowsControls>
          <RowButton onClick={() => setRows(rows + 1)}>
            <TiPlus />
          </RowButton>
          <RowButton onClick={() => setRows(rows - 1)}>
            <TiMinus />
          </RowButton>
        </RowsControls>
      </TextAreaWrapper>
    </FormFieldContainer>
  );
};
