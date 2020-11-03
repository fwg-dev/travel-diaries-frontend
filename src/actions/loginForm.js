export const updateLoginForm = (formData) => {
  console.log(formData)
  return{
    type: "UPDATE_LOG_FORM",
    formData
  }

}