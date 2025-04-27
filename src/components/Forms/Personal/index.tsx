import Input from "@/components/UI/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields, FormSteps, PersonalFormData } from "@/types";
import { isEmailValid, isValidPhone } from "@/utils/validation";
import { useResume } from "@/hooks/use-resume";
import { ACTIONS } from "@/store/action";
import { DEFAULT_FORM_DATA } from "@/config/form.config";

const PersonalFormGroup: FormFields<PersonalFormData>[] = [
  {
    name: "firstName",
    id: "full-name",
    label: "First name",
    isRequired: true,
  },
  {
    name: "lastName",
    id: "last-name",
    label: "Last name",
    isRequired: true,
  },
  {
    name: "email",
    id: "email-id",
    label: "Email",
    type: "email",
    placeholder: "xyz@example.com",
    isRequired: true,
    validate: (value) => isEmailValid(value as string),
  },
  {
    name: "phone",
    id: "phone-number",
    label: "Phone number",
    isRequired: true,
    placeholder: "+918888800000",
    validate: (value) => isValidPhone(value as string),
  },
  {
    name: "address",
    id: "address",
    label: "Address",
    isTextbox: true,
    isRequired: true,
  },
  {
    name: "dateOfBirth",
    id: "dob",
    label: "Date of birth",
    type: "date",
    isRequired: true,
  },
  {
    name: "nationality",
    id: "nationality",
    label: "Nationality",
  },
  {
    name: "website",
    id: "website",
    label: "Website",
    placeholder: "https://website.com",
  },
];

const PersonalForm = () => {
  const { state, dispatch } = useResume();

  const defaultValues = state.formData?.[FormSteps.PERSONAL] ?? DEFAULT_FORM_DATA[FormSteps.PERSONAL];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({defaultValues});

  console.log("personal form props ", { state });

  console.log({ errors });

  const onFormSubmit: SubmitHandler<PersonalFormData> = (formData) => {
    console.log({ formData });
    dispatch({
      type: ACTIONS.SUBMIT_FORM,
      payload: { formType: FormSteps.PERSONAL, data: formData },
    });
    dispatch({ type: ACTIONS.NEXT_STEP });
  };

  return (
    <div className="w-full">
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onFormSubmit)}
        id="personal-form"
      >
        {PersonalFormGroup.map(
          ({ id, name, validate, isRequired, isTextbox, ...rest }) => (
            <Input
              key={id}
              {...register(name, {
                ...(validate && { validate }),
                ...(isRequired && { required: `${rest.label} is required.` }),
              })}
              id={id}
              error={errors[name]?.message ?? ""}
              required={isRequired}
              textbox={isTextbox}
              {...rest}
            />
          )
        )}
        <div className="col-span-2">
          <Input
            textbox
            rows={5}
            id="summary"
            label="Profile Summary"
            required={true}
            {...register("summary", {required: "Summary is required."})}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
