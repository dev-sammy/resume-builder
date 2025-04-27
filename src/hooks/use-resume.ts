import { useContext } from "react";
import { ResumeContext } from "@/context/resume-context";

export const useResume = () => {
    const resumeContext = useContext(ResumeContext);
    if(!resumeContext){
        throw new Error('Component must be a child of ResumeProvider');
    }

    return resumeContext;
}