import { Validate } from "react-hook-form";

export type PersonalFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: Date | string;
  nationality?: string;
  website?: string;
  summary: string;
};

export type WorkFormData = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  responsibilities: string;
}

export type EducationFormData= {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export type SkillsFormData= {
  skillSet: string[];
}

export type ConfirmFormData= {
  agreedToTerms: boolean;
}

export enum FormSteps {
  PERSONAL = "personal",
  WORK = "work",
  EDUCATION = "education",
  SKILLS = "skills",
  CONFIRM = "confirm",
}

export type FormDataMapping = {
  [FormSteps.PERSONAL]: PersonalFormData;
  [FormSteps.WORK]: WorkFormData;
  [FormSteps.SKILLS]: SkillsFormData;
  [FormSteps.EDUCATION]: EducationFormData;
  [FormSteps.CONFIRM]: ConfirmFormData;
};

export type FormFields<T> = {
  name: keyof T;
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  isTextbox?: boolean;
  max?: number,
  min?: number,
  validate?:
    | Validate<string | number | Date | undefined, T>
    | Record<
        string,
        Validate<string | number | Date | undefined, T>
      >;
  isRequired?: boolean;
  pattern?: RegExp,
  minLength?: number
};
