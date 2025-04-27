import { StepActions, stepInitialValue, stepReducer } from "@/store/reducer";
import { ResumeState } from "@/types";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type ResumeContextType = {
  state: ResumeState;
  dispatch: Dispatch<StepActions>;
};

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stepReducer, stepInitialValue);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};
