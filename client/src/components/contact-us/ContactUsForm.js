import React ,{useState} from 'react';
import { addMessage }from '../../service/contact-us.service';
import toast from 'react-hot-toast';


function ContactUsForm() {
    const [contactForm,setContactForm] = useState({fname:'',email:'',message:''})
    
    const handleSubmit = (e) => {
      e.preventDefault();
      addMessage(contactForm).then((res) => {
        setContactForm({fname:'',email:'',message:''});
        toast.success('Successfully created!');
      }).catch(err => {
        toast.error('This did not work')
        console.log(err);
      })
    }


    return (
        <div>
    <form onSubmit={handleSubmit}>
      <label>Enter Your Name</label>
      <input 
        type="text" 
        required 
         value={ contactForm.fname }
         onChange={(e) => setContactForm({...contactForm,fname: e.target.value})}
      />
        <label>Enter Your Mail</label>
       <input 
        type="email" 
        required 
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        value={contactForm.email}
        onChange={(e) => setContactForm({...contactForm,email: e.target.value})}

      />
      <label>Enter Message</label>
      <textarea
        required
        value={contactForm.message}
        onChange={(e) => setContactForm({...contactForm,message: e.target.value})}
       ></textarea> 
      <button >Submit</button>
    </form>
        </div>
    )
}

export default ContactUsForm
