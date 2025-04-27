import { FormDataMapping, ResumeState, FormSteps } from "@/types";
import { ACTIONS } from "./action";

export const stepInitialValue: ResumeState = {
  currentStep: 0,
  formData: null,
};

type SubmitFormAction = {
  type: ACTIONS.SUBMIT_FORM;
  payload: {
    formType: FormSteps;
    data: FormDataMapping[FormSteps];
  };
};

export type StepActions =
  | { type: ACTIONS.NEXT_STEP }
  | { type: ACTIONS.PREVIOUS_STEP }
  | SubmitFormAction;

export const stepReducer = (
  state: ResumeState,
  action: StepActions
): ResumeState => {
  if (action.type === ACTIONS.NEXT_STEP) {
    return {
      ...state,
      currentStep: state.currentStep + 1,
    };
  }

  if (action.type === ACTIONS.PREVIOUS_STEP) {
    return {
      ...state,
      currentStep: state.currentStep - 1,
    };
  }

  if (action.type === ACTIONS.SUBMIT_FORM) {
    const { formType, data } = action.payload;
    const updateFormData = state.formData
      ? { ...state.formData, [formType]: data }
      : ({ [formType]: data } as FormDataMapping);
    return {
      ...state,
      formData: updateFormData,
    };
  }

  return state;
};
