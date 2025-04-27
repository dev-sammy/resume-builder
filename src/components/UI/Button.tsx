import { ButtonHTMLAttributes } from "react";

type Props = {
  label: string,
  onClick?: () => void,
}

const Button = ({ label, onClick, ...rest }: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="border-0 bg-sky-600 text-white rounded-md py-2 px-4 cursor-pointer"
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
