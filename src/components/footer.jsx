import { IoIosMegaphone } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-text">
          <IoIosMegaphone />
          <p>New freelance services available!</p>
        </div>

        <button class="footer-search">Start your search</button>
      </footer>
    </>
  );
};

export default Footer;
