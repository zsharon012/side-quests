export default function SavedProfile({ clicked, name, contactInfo, handleClick }) {
  const bgColor = clicked ? 'rgba(229, 229, 229, 1)' : '#F9F9FF';

  return (
    <div style={{ backgroundColor: bgColor }} onClick={handleClick}>
      <hr className="my-line"/>
      <h3>{name}</h3>
      <p>Contact Info: {contactInfo}</p>
    </div>
  )
}