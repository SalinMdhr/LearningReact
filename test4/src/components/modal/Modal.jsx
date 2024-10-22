import {AiOutlineClose} from "react-icons/ai";
import {createPortal} from "react-dom";

function Modal({onClose, isOpen, children}) {
    return createPortal(
        <>
            {
                isOpen && (
                    <div className="grid place-items-center absolute top-0 z-40 backdrop-blur h-screen w-screen">
                        <div className="relative m-auto min-h-[200px] min-w-[80%]
                            bg-white p-2 z-50">
                            <div className="flex justify-end">
                                <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer"/>
                            </div>
                            {children}
                        </div>
                        
                    </div>
                )
            }
        </>
    , 
    document.getElementById("modal-root")
);
}

export default Modal;
