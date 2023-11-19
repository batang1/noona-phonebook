import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";

const ContactList = () => {
    const {contactList, keyword} = useSelector((state) => state);
    let [filterList, setFilterList] = useState([]);

    useEffect(() => {
        if (keyword !== ""){
            let list = contactList.filter((item)=>item.name.includes(keyword));
            setFilterList(list);
        } else {
            setFilterList(contactList);
        }
    },[keyword, contactList]);

    return (
        <div>
            <SearchBox />
            {filterList.map((item, index) => (
                <ContactItem item={item} key={index} />
            ))}
        </div>
    );
};

export default ContactList;
