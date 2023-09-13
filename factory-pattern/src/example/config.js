export const getLoginConfig = (onChange, formDetails) => {
  return [
    {
      label: "Email",
      type: "text",
      onChange: (e) => onChange(e.target.value, "email"),
      value: formDetails.email,
    },
    {
      label: "Password",
      type: "password",
      onChange: (e) => onChange(e.target.value, "password"),
      value: formDetails.password,
    },
  ];
};

export const getSignUpConfig = (onChange, formDetails) => {
  return [
    {
      label: "Name",
      type: "text",
      onChange: (e) => onChange(e.target.value, "userName"),
      value: formDetails.userName,
    },
    {
      label: "Email",
      type: "text",
      onChange: (e) => onChange(e.target.value, "email"),
      value: formDetails.email,
    },
    {
      label: "Password",
      type: "password",
      onChange: (e) => onChange(e.target.value, "password"),
      value: formDetails.password,
    },
    {
      label: "Confirm Password",
      type: "password",
      onChange: (e) => onChange(e.target.value, "cpassword"),
      value: formDetails.cpassword,
    },
  ];
};

export const getDetailsConfig = (onChange, formDetails) => {
  return [
    {
      label: "Name",
      type: "text",
      onChange: (e) => onChange(e.target.value, "name"),
      value: formDetails.name,
    },
    {
      label: "Age",
      type: "number",
      onChange: (e) => onChange(e.target.value, "age"),
      value: formDetails.age,
      errorFlag: true,
      errorMsg: "required",
    },
    {
      label: "DOB",
      type: "date",
      onChange: (e) => onChange(e.target.value, "date"),
      value: formDetails.date,
    },
    {
      label: "Gender",
      type: "dropdown",
      options: ["male", "female"],
      onChange: (e) => onChange(e.target.value, "confirmPassword"),
      value: formDetails.confirmPassword,
    },
  ];
};
