import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HackerXp", title: "Github" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/%C3%A9lvio-de-sousa-a7a06027/", title: "LinkedIn" },
  /* { icon: <FaYoutube />, path: "" }, */
  { icon: <FaTwitter />, path: "https://x.com/ElvioSadoc", title: "Twitter" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            title={item.title}
            key={index}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
