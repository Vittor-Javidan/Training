import React from "react"

export default function Form_2() {

   const [formData, setFormData] = React.useState({
      email: "",
      password: "",
      passwordConfirm: "",
      joinNewsletter: false
   })

   function handleChange(event) {

      const { name, value, type, checked } = event.target

      setFormData(prevState => prevState = {
         ...formData,
         [name]: type === "checkbox" ? checked : value
      })
   }

   function handleSubmit(event) {

      event.preventDefault()

      if(formData.password === formData.passwordConfirm){
         console.log(`Successfully signed up`)
         formData.joinNewsletter && console.log("Thanks for signing up for our newsletter!")
      } else {
         console.log(`Passwords do not match`)
      }
   }

   console.log(formData)

   return (
      <form onSubmit={handleSubmit}>
         <input
            name="email"
            placeholder="yourEmail@something.com"
            onChange={handleChange}
            value={formData.email}
         >
         </input>
         <input
            type={"password"}
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
         >
         </input>
         <input
            type={"password"}
            name="passwordConfirm"
            placeholder="password again"
            onChange={handleChange}
            value={formData.passwordConfirm}
         >
         </input>
         <input
            type={"checkbox"}
            id="joinNewsletter"
            name="joinNewsletter"
            onChange={handleChange}
            checked={formData.joinNewsletter}
         >
         </input>
         <label htmlFor="joinNewsletter">I want to join the newsletter</label>
         <br />
         <br />
         <button>
            Sing Up
         </button>
      </form>
   )
}