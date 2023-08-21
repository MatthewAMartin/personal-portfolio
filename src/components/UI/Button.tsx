import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ className, type = 'button', onClick, disabled = false, href, children }) =>
  href ? (
    <a
      type="button"
      href={href && href}
      className={cn('py-2 px-4 rounded-full whitespace-nowrap transition font-bold', className)}
    >
      {children}
    </a>
  ) : (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick && onClick}
      className={cn('py-2 px-4 rounded-full whitespace-nowrap transition font-bold', className)}
    >
      {children}
    </button>
  );

export default Button;
