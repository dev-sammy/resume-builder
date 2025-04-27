import { ComponentType } from "react";
import { FormDataMapping } from "./form";

export type FormTypes = keyof FormDataMapping;

export type ResumeState = {
  currentStep: number;
  formData: FormDataMapping | null;
};

export type FormProps<T> = {
    data: T,
    onSubmit: (formData: T) => void
}

type ResumeFormConfig<K extends FormTypes> = {
    id: string;
    step: K;
    component: ComponentType;
    title?: string;
  };

  export type ResumeForms = {
    [K in FormTypes]: ResumeFormConfig<K>;
  }[FormTypes];

