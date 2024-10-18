import { useState } from "react";
import { data } from "../../data";
import cat from "../../images/cat.png";
import { FaXTwitter, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./Attendees.css";

const Attendees = () => {
  const [search, setSearch] = useState("");

  let iconStyles = { color: "white", fontSize: "1.5em" };
  const filteredAttendees = data.filter((item) => {
    return search === ""
      ? item
      : item.name.toLowerCase().startsWith(search);
  });
  console.log(search);
  return (
    <div id="body">
      <div id="searchbar">
        <input
          type="text"
          id="search"
          placeholder="Search Attendees"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase().trim());
          }}
        />
      </div>
      <div id="attendee-list">
        {filteredAttendees.length === 0 ? (
          <div id="default-message">No attendees to display</div>
        ) : (
          filteredAttendees.map((attendee) => (
            <div key={attendee.id} className="attendee">
              <div className="transparent"></div>
              <div className="attendee-body">
                <div className="left">
                  <div className="img-holder">
                    <img src={attendee.profile_image} alt="profile-pic" />
                  </div>
                  <div className="details">
                    <p className="name">{attendee.name}</p>
                    <p className="company">{attendee.company}</p>
                    <p className="position">{attendee.position}</p>
                  </div>
                </div>
                <div className="right">
                  <div className="cont-details">
                    <div className="email">
                      <p>{attendee.email}</p>
                      <IoIosMail className="cont-icon" />
                    </div>
                    <div className="phone">
                      <p>{attendee.phone}</p>
                      <FaPhone className="cont-icon" />
                    </div>
                  </div>
                  <div className="socials">
                    <a href="https://www.instagram.com/" target="_blank">
                      <span
                        className="icons"
                        style={{
                          background:
                            "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)",
                        }}
                      >
                        <FaInstagram style={iconStyles} />
                      </span>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                      <span className="icons" style={{ background: "#0879FB" }}>
                        <FaFacebookF style={iconStyles} />
                      </span>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <span className="icons" style={{ background: "#000000" }}>
                        <FaXTwitter style={iconStyles} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Attendees;
