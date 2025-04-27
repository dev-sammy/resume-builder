import Navigation from "@/components/Navigation";
import { FORMS } from "@/config/form.config";
import { useResume } from "@/hooks/use-resume";


const Resume = () => {
  const {state} = useResume();
  const currentFormConfig = FORMS[state.currentStep];
  const CurrentFormComponent = currentFormConfig.component;
  // const formData = getFormData(state.formData, currentFormConfig.step);



  return (
   <div className="w-full">
     <CurrentFormComponent/>
     <Navigation/>
   </div>
  )
}

export default Resume;



// import { FORMS } from "../store/FormsConfig";
// import { useResumeContext } from "../contexts/ResumeContext";

// const Resume = () => {
//   const { state, dispatch } = useResumeContext();
//   const currentFormConfig = FORMS[state.currentStep];
//   const CurrentFormComponent = currentFormConfig.component;

//   const handleSubmit = (formData: typeof state.formData[typeof currentFormConfig.step]) => {
//     dispatch({
//       type: "SUBMIT_FORM",
//       payload: { formType: currentFormConfig.step, data: formData },
//     });
//     dispatch({ type: "NEXT_STEP" });
//   };

//   return (
//     <div className="w-full">
//       <CurrentFormComponent
//         data={state.formData?.[currentFormConfig.step] || {}}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default Resume;
