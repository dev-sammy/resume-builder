import { ForwardedRef, forwardRef } from "react";

type Props = {
  id: string;
  type?: string;
  name: string;
  label: string;
  textbox?: boolean;
  rows?: number;
  error?: string;
  required?: boolean;
};

const Input = forwardRef(
  (
    {
      id,
      name,
      type = "text",
      label,
      textbox = false,
      rows,
      error,
      required = false,
      ...rest
    }: Props,
    ref
  ) => {
    const commonProps = {
      id,
      name,
      type,
      "aria-required": required ? "true" : ("false" as "true" | "false"),
      "aria-invalid": error ? "true" : ("false" as "true" | "false"),
      "aria-describedby": error ? `${id}-error-msg` : undefined,
      ...rest,
    };
    return (
      <div className="flex gap-2 flex-col">
        <label className="capitalize" htmlFor={id}>
          {label}
          {required && <span className="text-sm text-red-500"> *</span>}
        </label>
        <div>
          {textbox ? (
            <textarea
              className="border-1 border-stone-300 rounded-sm p-1.5 w-full"
              rows={rows ?? 1}
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              {...commonProps}
            ></textarea>
          ) : (
            <input
              className="border-1 border-stone-300 rounded-sm p-1.5 w-full"
              ref={ref as ForwardedRef<HTMLInputElement>}
              {...commonProps}
            />
          )}
          {error && (
            <span id={`${id}-error-msg`} className="text-xs text-red-800">
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
