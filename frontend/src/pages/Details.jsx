import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import axios from "axios";

const Details = ({ addUserSubmit }) => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("B.tech");
  const [year, setYear] = useState("");
  const [sem, setSem] = useState("");
  const [type, setType] = useState("");
  const [college, setCollege] = useState("");

  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();


  
  const submitForm = async (e) => {
    try {
      e.preventDefault();

      const API_URL = "http://127.0.0.1:5000/api/users/createUser";
      const userInfo = {
        "email": contactEmail,
        "username": username,
        "fullName": username,
        "studentType": type,
        "semester": sem,
        "year": year,
        "phoneNumber": contactPhone,
        "college": college,
      };

      await axios
        .post(API_URL, userInfo)

      // addUserSubmit(userInfo);

      toast.success("Job Added Successfully");

      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#000400]">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-gray-800 text-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Details
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border bg-black rounded w-full py-2 px-3"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  College
                </label>
                <select
                  id="college"
                  name="college"
                  className="border bg-black rounded w-full py-2 px-3"
                  required
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="tula">Tula's Institute Dehradun</option>
                  <option value="shivalik">
                    Shivalik college of engineering
                  </option>

                  <option value="jbit">JBIT</option>
                  <option value="bfit">BFIT</option>
                  <option value="grd">GRD</option>
                  <option value="other">Others</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Course
                </label>
                <select
                  id="course"
                  name="course"
                  className="border bg-black rounded w-full py-2 px-3"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="b.tech">B.Tech</option>
                  <option value="bba">BBA</option>
                  <option value="mca">MCA</option>
                  <option value="bca">BCA</option>
                </select>

                <label className="block mt-2 text-gray-700 font-bold mb-2">
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  className="border bg-black rounded w-full py-2 px-3"
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                </select>

                <label className="block mt-2 text-gray-700 font-bold mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border bg-black rounded w-full py-2 px-3"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>

                <label
                  htmlFor="type"
                  className="block mt-2 text-gray-700 font-bold mb-2"
                >
                  Semester
                </label>
                <select
                  id="sem"
                  name="sem"
                  className="border bg-black rounded w-full py-2 px-3"
                  required
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border bg-black rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  required
                  name="contact_phone"
                  className="border bg-black rounded w-full py-2 px-3"
                  placeholder="Phone for applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Details;
