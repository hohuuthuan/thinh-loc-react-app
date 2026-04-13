import type { ButtonProps } from '../../types';

export const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-dark-900 hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
