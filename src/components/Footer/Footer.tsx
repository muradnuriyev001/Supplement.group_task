import c from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.copyright}>
        <p>Powered by Murad Nuriyev</p>
      </div>
    </div>
  );
};

export default Footer;
