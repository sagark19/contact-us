import { Toaster } from 'react-hot-toast';
import Navbar from './common/navbar/Navbar';
import ContactUsPage from './pages/ContactUsPage'
function App() {
  
  return (
    
    <div>
       <Navbar />
       <ContactUsPage />
       <Toaster />
  </div>
  );
}

export default App;
