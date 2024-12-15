import Image from "next/image";

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 flex justify-center border-t-2 py-8">
    <a
      className="flex items-center"
      href="https://github.com/stavros-liaskos/recipetron"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by 🥩 and
      <Image
        className="ml-2"
        alt="github"
        src="https://github.githubassets.com/images/icons/emoji/octocat.png"
        height="20"
        width="20"
      />
    </a>
  </footer>
);

export default Footer;
