const Footer = ({length}) => {
  return ( 
    <div className="footer">
      <p className="item-count">{length} list {length === 1 ? "item" : "items" }</p>
      <p>Copyrights &copy; 2022 </p>
    </div>
   );
}
 
export default Footer;