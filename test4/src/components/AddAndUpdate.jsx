import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./modal/Modal";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactValidation = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    phone:Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone is required"),
    email:Yup.string().email("Invalid E-mail").required("E-mail is required"),
})

function AddAndUpdate({isOpen, onClose, isUpdate, contact}) {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
            
        };
    };

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            toast.success("Contact Updated Successfully");
            onClose();
        } catch (error) {
            console.log(error);
            
        };
    };

    return(
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik validationSchema={contactValidation} initialValues={isUpdate ? {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                } : {
                    name: "",
                    phone: "",
                    email: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                    isUpdate ?
                    updateContact(values, contact.id) :
                    addContact(values);
                    
                }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="border h-10"/>
                            <div className="text-xs text-red-500">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone">Phone no</label>
                            <Field name="phone" className="border h-10"/>
                            <div className="text-xs text-red-500">
                                <ErrorMessage name="phone" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">E-mail</label>
                            <Field name="email" className="border h-10"/>
                            <div className="text-xs text-red-500">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <button className="border bg-orange px-3 py-1.5 self-end">{isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}

export default AddAndUpdate;

