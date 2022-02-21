import React from "react"

export default function Form() {

   const [formData, setFormData] = React.useState(
      {
         firstName: "",
         lastName: "",
         email: "",
         comments: "",
         isFriendly: true,
         employment: "",
         favColor: ""
      }
   )

   function handleChange(event) {

      const { name, value, type, checked } = event.target

      setFormData(prevState => prevState = {
         ...prevState,
         [name]: type === "checkbox" ? checked : value
      })
   }

   function handleSubmit(event) {
      event.preventDefault()
      // submitToApi(formData) - theoretical function to submit the object we created "formData" into the API
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
         />
         <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
         />
         <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
         />
         <textarea
            type="text"
            placeholder="Write a comment"
            onChange={handleChange}
            name="comments"
            value={formData.comments}
         />
         <input
            type="checkbox"
            id="isFriendly"
            onChange={handleChange}
            name="isFriendly"
            checked={formData.isFriendly}
         />
         <label htmlFor="isFriendly">Are you friendly?</label>
         <br />
         <br />
         <fieldset>
            <legend>Current employment status</legend>

            <input
               type="radio"
               id="part-time"
               onChange={handleChange}
               name="employment"
               value="unemployed"
               checked={formData.employment === "unemployed"}
            />
            <label htmlFor="part-time">Unemployed</label>
            <input
               type="radio"
               id="part-time"
               onChange={handleChange}
               name="employment"
               value="part-time"
               checked={formData.employment === "part-time"}
            />
            <label htmlFor="part-time">Part-time</label>
            <input
               type="radio"
               id="part-time"
               onChange={handleChange}
               name="employment"
               value="full-time"
               checked={formData.employment === "full-time"}
            />
            <label htmlFor="part-time">Full-time</label>
         </fieldset>
         <br />
         <label htmlFor="favColor" >What is your favorite color?</label>
         <br />
         <select
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
         >
            <option value="">--Chose--</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">violet</option>
         </select>
         <br />
         <br />
         <button >Submit</button>

      </form>
   )
}