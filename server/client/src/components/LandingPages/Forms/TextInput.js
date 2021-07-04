import { useField } from "formik";
import { StyledField, StyledError } from "../Landing.styles";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledField{...field} {...props} />
      {meta.touched && meta.error && (
        <StyledError>{meta.error}</StyledError>
      )}
    </>
  );
};

export default TextInput;