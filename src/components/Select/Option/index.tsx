export interface OptionProps {
  children: string;
  value: string;
}

const Option = ({ children, value }: OptionProps) => <option value={value}>{children}</option>;

export default Option;
