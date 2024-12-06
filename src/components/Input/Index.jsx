import InputField from "./Input";
import Label from "./Labes";

const Input = (props) => {
  const { children, htmlfor, type, name, id, placeholder } = props;
  return (
    <div>
      <Label htmlfor={htmlfor}>{children}</Label>
      <InputField type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};
