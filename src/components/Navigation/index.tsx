import Button from "@/components/UI/Button"
import { FORMS } from "@/config/form.config";
import { useResume } from "@/hooks/use-resume";
import { ACTIONS } from "@/store/action";

const Navigation = () => {
  const {state, dispatch} = useResume();
  const currentFormId = FORMS[state.currentStep].id;

  const onBack = () => {
    dispatch({type: ACTIONS.PREVIOUS_STEP});
  }
  return (
    <div className="flex gap-4 mt-4 justify-between items-center">
        <Button label="< Back" onClick={onBack}/>
        <Button label="Next >" type="submit" form={currentFormId}/>
    </div>
  )
}

export default Navigation