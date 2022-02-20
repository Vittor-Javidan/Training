//IMPORTANT: Example 4 was not tested!!

import React from "react";

export default function Example_4() {

   const [contact, setContact] = React.useState({
      firstName: "John",
      lastName:"Doe",
      phone: "+1 (719) 555-1212",
      profileImg: "",
      email: "itsmyrealname@example.com",
      isFavorite: false
   })

   let starIcon = contact.isFavorite ? "put a star filled png url" : "put a star empty png url"

   function toggleFavorite(){
      setContact(prevContact => {
         return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
         }
      })
   }

   return (
      <main>
         <article className="card">
            <img src={contact.profileImg} className="card--image" alt=""/>
            <div className="card--info">
               <img 
                  src={starIcon} 
                  className="card--favorite" 
                  alt=""
                  onClick={toggleFavorite}
               />
               <h2 className="card--name">
                  {`${contact.firstName} ${contact.lastName}`}
               </h2>
               <p className="card--contact">{contact.phone}</p>
               <p className="card--contact">{contact.email}</p>
            </div>
         </article>
      </main>
   )
}
