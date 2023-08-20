import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, type = 'button', onClick, disabled = false, children }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick && onClick}
    className={cn(
      'flex justify-center items-center py-2 px-4 rounded-full whitespace-nowrap transition font-bold',
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
