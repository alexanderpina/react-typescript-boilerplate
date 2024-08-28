import { Spinner } from '@/components/Spinner'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ text, isLoading, className, children, ...props }) => (
  <button type="button" className={className} {...props}>
    {isLoading ? <Spinner /> : children ?? text}
  </button>
)
