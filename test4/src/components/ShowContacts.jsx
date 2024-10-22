import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useStateOfModal from "../hooks/useStateOfModal";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";

function ShowContacts({contact}) {

    const {onClose, onOpen, isOpen} = useStateOfModal();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
            console.log(error);
        }
    };
    
    return(
        <div className="mt-4 flex flex-col gap-4">
            
                    <div key={contact.id} className="flex bg-yellow justify-between items-center p-2 rounded-2xl">
                        <div className="flex gap-2">
                            <HiOutlineUserCircle className="text-orange text-6xl"/>
                            <div className="">
                                <h2 className="font-medium">{contact.name}</h2>
                                <p className="text-[16px]">{contact.phone}</p>
                                <p className="text-sm">{contact.email}</p>
                            </div>
                        </div>
                        <div className="flex text-4xl cursor-pointer">
                            <RiEditCircleLine onClick={onOpen} />
                            <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange"/>
                        </div>
                    </div>
            <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </div>
    );
}

export default ShowContacts;