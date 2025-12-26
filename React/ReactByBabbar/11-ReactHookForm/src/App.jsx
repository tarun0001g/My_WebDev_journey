
import './App.css'
import { useForm } from "react-hook-form"

function App() {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }, //isSubmitting: says is your form is in submitting state or not ?
  } = useForm();
  //Imported above things from documentation :https://react-hook-form.com/get-started

  async function onSubmit(data){
    await new Promise ((resolve)=>{ setTimeout(resolve,5000)}); //After 5s data will be added/fetched by server
    console.log("Submitting the form data:",data)
  }

  return (
    /* Here "handleSubmit" will validate your inputs before invoking(procedure to execute) "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* We need to attach this <input/> field with <form/> internally so that it can validated/fetch input data */}
    <div>
      <label>First Name </label>
      <input className={errors.firstName ? 'input-error' : ''} {...register("firstName",
        { required: true,
          minLength: {value:3, message:"Min length at least 3"},
          maxLength: {value:12, message:"Max length at most 15"}
        }) } /> 
      {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
    </div>
    <br />

    <div>
      <label>Middle Name </label>
      <input className={errors.middleName ? 'input-error' : ''} {...register("middleName")} />{/* register your input into the hook by invoking the "register" function */}
      {/* Now we have registered input fields with form for data fetching/handling, 
      now form can track these input fields, means now we cad add validations, track values, error handling on it*/}
    </div>
    <br />

    <div>
      <label>Last Name </label>
      <input className={errors.lasttName ? 'input-error' : ''} {...register("lastName", {pattern:
        { value: /^[A-Za-z]+$/i,
          message: "Last Name is not as per rules"}
         })} />
        {errors.lastName && <p className='error-msg' > {errors.lastName.message}</p>}
    </div>
    <br />  
      
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting":"Submit"}/> 
      {/* Now submit button will be only availabe after submission completion of previous form */}

    </form>

  )
}

export default App
