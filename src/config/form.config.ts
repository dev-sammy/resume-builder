import EducationForm from "@/components/Forms/Education";
import ConfirmForm from "@/components/Forms/Others";
import PersonalForm from "@/components/Forms/Personal";
import SkillsForm from "@/components/Forms/Skills";
import WorkForm from "@/components/Forms/Work";
import { FormDataMapping, FormSteps, ResumeForms } from "@/types";

export const FORMS: ResumeForms[] = [
  {
    id: "personal-form",
    step: FormSteps.PERSONAL,
    component: PersonalForm,
    title: "Personal Information",
  },
  {
    id: "work-form",
    step: FormSteps.WORK,
    component: WorkForm,
    title: "Work History",
  },
  {
    id: "education-form",
    step: FormSteps.EDUCATION,
    component: EducationForm,
    title: "Education Details",
  },
  {
    id: "skills-form",
    step: FormSteps.SKILLS,
    component: SkillsForm,
    title: "Skills",
  },
  {
    id: "confirm-form",
    step: FormSteps.CONFIRM,
    component: ConfirmForm,
    title: "Confirm Details",
  },
];

export const DEFAULT_FORM_DATA: FormDataMapping = {
  [FormSteps.PERSONAL]: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    summary: "",
  },
  [FormSteps.WORK]: {
    company: "",
    position: "",
    startDate: "",
    responsibilities: "",
  },
  [FormSteps.EDUCATION]: {
    degree: "",
    institution: "",
    fieldOfStudy: "",
    graduationYear: "",
  },
  [FormSteps.SKILLS]: { skillSet: [] },
  [FormSteps.CONFIRM]: { agreedToTerms: false },
};
