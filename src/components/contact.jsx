import doggo from "../assets/doggo.jpg";
import phoneImg from "../assets/phone.png";
import mailImg from "../assets/mail.png";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        Please get in touch if you think our work can be mutually benefitial!
      </p>
      <div className="contactDetails">
        <div className="details">
          <div className="address">Suryabinayak, Bhaktapur</div>
          <div className="phone">
            <img src={phoneImg} alt="" />
            9823741079
          </div>
          <div className="mail">
            <img src={mailImg} alt="" />
            lamap8708@gmail.com
          </div>
        </div>
        <img src={doggo} alt="ME" id="anotherMe" />
      </div>
    </div>
  );
}
