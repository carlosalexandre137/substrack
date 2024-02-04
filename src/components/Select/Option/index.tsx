interface OptionProps {
  value: string;
  children: string;
}

const Option = ({ value, children }: OptionProps) => <option value={value}>{children}</option>;

export default Option;
