import {MdOutlineSearch} from "react-icons/md";
import {IoIosAddCircleOutline} from "react-icons/io";

function AddSearch({onOpen, filterContacts}) {
    return(
        <div className="flex items-center gap-2">
            <div className="flex flex-grow relative items-center">
                <MdOutlineSearch className="absolute text-white text-3xl ml-1" />
                <input onChange={filterContacts} type="text" className="
                    flex-grow 
                    border border-white 
                    bg-transparent rounded-md h-10
                    text-white pl-9
                " />
            </div>
            
            <IoIosAddCircleOutline onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
        </div>
    );
}

export default AddSearch;