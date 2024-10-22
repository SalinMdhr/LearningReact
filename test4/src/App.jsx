import { useEffect, useState } from "react";
import AddSearch from "./components/AddSearch";
import NavBar from "./components/NavBar";
import {db} from "./config/firebase";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import ShowContacts from "./components/ShowContacts";
import AddAndUpdate from "./components/AddAndUpdate";
import useStateOfModal from "./hooks/useStateOfModal";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import ContactNotFound from "./components/ContactNotFound";

function App() {
  const [contacts, setContacts] = useState([]);

  const {onClose, onOpen, isOpen} = useStateOfModal();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => { //shows real time updates
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          setContacts(contactLists);
          return contactLists;
        });

      } catch (error) {
        console.log(error + "Error");
        
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const result = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => { //shows real time updates
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(result.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts;
    });
  }

  return(
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <NavBar />
        <AddSearch filterContacts={filterContacts} onOpen={onOpen} />
        <div>
          {
            contacts.length <= 0 ? <ContactNotFound /> :
            contacts.map((contact) => (
              <ShowContacts key={contact.id} contact={contact}/>

            ))
          }
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;