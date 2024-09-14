import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Admin() {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    no_of_semester: "",
    semesters: [],
  });

  // Handle form submission
  const submitCourse = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const API_URL = "http://127.0.0.1:5000/api/courses/createCourse";
      const response = await axios.post(API_URL, courseDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle change in the number of semesters
  const handleNoOfSemestersChange = (e) => {
    const noOfSemesters = parseInt(e.target.value); // Convert to number

    // Create an array of semesters based on the number of semesters
    const newSemesters = Array.from({ length: noOfSemesters }, (_, i) => ({
      semester_no: i + 1,
      no_of_subject: noOfSemesters,
      subjects: [
        {
          sub_name: "",
          no_of_units: 0,
          units: [{}],
        },
      ],
    }));
    // Update the course details state with the new number of semesters and semester array
    setCourseDetails((prevState) => ({
      ...prevState,
      no_of_semester: e.target.value,

      semesters: newSemesters, // Set the new semesters array
    }));
  };

  // Handle change in subjects for a specific semester
  const handleSubjectsChange = (e, semester_no) => {
    const subjectsInput = e.target.value;
    // Split the input by commas and trim spaces
    const subjectsArray = subjectsInput.split(",").map((subject) => {
      return {
        sub_name: subject.trim(), // Set the subject name
        no_of_units: 0, // Initialize units
        units: [
          {
            unit_number: 0,
            unit: 0,
          },
        ], // Initialize units array
      };
    });

    // Update the specific semester's subjects
    setCourseDetails((prevState) => ({
      ...prevState,
      semesters: prevState.semesters.map((sem) =>
        sem.semester_no === semester_no
          ? { ...sem, subjects: subjectsArray } // Update subjects
          : sem
      ),
    }));
  };
  const handleSubjectNameChange = (e, semester_no, subjectIndex) => {
    const inputValue = e.target.value;

    // Extract the subject name and units from the input
    const [subjectName, unitsString] = inputValue; // Assuming units are separated by a '|'
    const unitsArray = unitsString
      ? unitsString.split(",").map((unit, i) => ({
          unit_number: i + 1,
          unit: unit.trim() || "", // Default to empty string if unit is undefined
        }))
      : [];

    setCourseDetails((prevState) => ({
      ...prevState,
      semesters: prevState.semesters.map((sem) =>
        sem.semester_no === semester_no
          ? {
              ...sem,
              subjects: sem.subjects.map((sub, index) =>
                index === subjectIndex
                  ? {
                      ...sub,
                      sub_name: subjectName.trim(), // Update subject name
                      units: unitsArray,
                    }
                  : sub
              ),
            }
          : sem
      ),
    }));
  };

  const handleFileUpload = (e, semester_no, subjectIndex, unitIndex) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      // Update the state with the uploaded file
      setCourseDetails((prevState) => ({
        ...prevState,
        semesters: prevState.semesters.map((sem) =>
          sem.semester_no === semester_no
            ? {
                ...sem,
                subjects: sem.subjects.map((sub, index) =>
                  index === subjectIndex
                    ? {
                        ...sub,
                        units: sub.units.map((unit, uIndex) =>
                          uIndex === unitIndex
                            ? {
                                ...unit,
                                file: file, // Temporarily store the file
                              }
                            : unit
                        ),
                      }
                    : sub
                ),
              }
            : sem
        ),
      }));
    }
  };
  
  

  return (
    <div>
      <Navbar />
      {/* Course form */}
      <form onSubmit={submitCourse} className="max-w-sm mx-auto m-4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Course Name"
            required
            onChange={(e) => {
              setCourseDetails((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="semester"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Semesters
          </label>
          <input
            type="number"
            id="semester"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            min="1"
            required
            onChange={handleNoOfSemestersChange}
          />
        </div>
        {courseDetails.semesters.map((semester) => (
          <div key={semester.semester_no} className="mb-5">
            <label
              htmlFor={`semester-${semester.semester_no}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Semester {semester.semester_no} Subjects
            </label>
            <input
              type="text"
              id={`semester-${semester.semester_no}`}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter subjects separated by commas"
              onChange={(e) => handleSubjectsChange(e, semester.semester_no)}
            />
            {semester.subjects.map((subject, index) => (
              <div key={index} className="m-5">
                <label
                  htmlFor={`subject-${semester.semester_no}-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject {index + 1} Units
                </label>
                <input
                  type="text"
                  id={`subject-${semester.semester_no}-${index}`}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter units name"
                  
                  onChange={(e) =>
                    handleSubjectNameChange(e, semester.semester_no, index)
                  }
                />
                {subject.units.map((unit, unitIndex) => (
                  <div key={unitIndex} className="mb-5">
                    <label
                      htmlFor={`unit-${semester.semester_no}-${index}-${unitIndex}`}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Unit {unitIndex + 1} PDF
                    </label>
                    <input
              type="file"
              id={`unit-${semester.semester_no}-${index}-${unitIndex}`}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-l-md file:bg-gray-50 file:text-sm file:font-medium focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={(e) => handleFileUpload(e, semester.semester_no, index, unitIndex)}
            />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </form>
    </div>
  );
}
