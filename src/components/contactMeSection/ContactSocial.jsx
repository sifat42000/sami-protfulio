import SingleContactSocial from "./SingleContactSocial";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      
      <SingleContactSocial link="https://www.instagram.com/shahriar_sami__/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.facebook.com/profile.php?id=100024305117394" Icon={MdOutlineFacebook} />
     

    </div>
  );
};

export default ContactSocial;
