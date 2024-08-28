import { type InputHTMLAttributes } from 'react'
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister } from 'react-hook-form'

export interface Props<T extends FieldValues = FieldValues, U extends FieldValues = FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  disabled?: boolean
  register: UseFormRegister<T>
  errors?: FieldErrors<U>
}

export const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  ...rest
}: Props<T, U>) => {
  return (
    <div>
      <label htmlFor={name}>{label ?? ''}</label>
      <input
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="">{errors[name as keyof U]?.message as string}</span>
      )}
    </div>
  )
}
