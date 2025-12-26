
Three things i will  learn  in this project

1. How to create react hook form
2. How to register fields with form / Integreate fields( like name, age) with actual form 
3. What will features/process applied when u click on submit
4. validation of input
5. styling on error messages
6. submit button use/limitations , adding submission delay
7. Prevent  Multiple submission :
Submit button should be available only after the data is fetched/stored/processed
   we  use isSubmitting(pre defined flag) to solve it

{ required: true, -> input must required, it cannot be empty
 minLength: 3 } -> 

 {...register("firstName")} -> input filed linked with form


{errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
means: if any error comes from firstName input field then print them in this p tag


