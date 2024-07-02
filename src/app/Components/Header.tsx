import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Header = () => {
  return ( 
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top_icon_wrapper">
                        <FaFacebook />
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaInstagram />
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaTwitter />
                    </div>
                    <div>
                    <b> FREE SHIPPING</b>THIS WEEK ORDER OVER
                    </div>
                    <div>
                    <select
                    className="form-select"
                    name="currency"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <select
                    className="form-select"
                    name="Language"
                    >
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;