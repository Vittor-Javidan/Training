function Contact({img, name, phone, email}) {

   return (

      <div className="contact-card">

         <img src={img} alt="" />
         <h3>{name}</h3>

         <div className="info-group">
            <img src="phone icon" alt="" />
            <p>{phone}</p>
         </div>

         <div className="info-group">
            <img src="email icon" alt="" />
            <p>{email}</p>
         </div>

      </div>

   )
}

export default Contact