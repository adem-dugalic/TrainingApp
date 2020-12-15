import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { QueryStatus, useQuery } from "react-query";
import { FetchAllCourses } from "./FetchAllCourses";

interface AllCoursesTableProps {
  data?: any;
  status?:
    | QueryStatus.Idle
    | QueryStatus.Loading
    | QueryStatus.Success
    | QueryStatus.Error;
}

// const addCourse = async (courseId) => {
//   const res = await fetch(
//     "http://localhost:5000/users/addCourse?token=" +
//       Cookie.get("token") +
//       "&userId=" +
//       Cookie.get("userId"),
//     courseId
//   );
//   return res.json();
// };

export const AllCoursesTable: React.FC<AllCoursesTableProps> = () => {
  const { data, status } = FetchAllCourses();
  if (status === "error") {
    return <div>Error</div>;
  }
  if (status === "loading") {
    return <div>Loading</div>;
  }

  const maybe = data.array.map((item: any) => (
    <tr key={item.course_id}>
      <td className="title">{item.course_id}</td>
      <td>
        <a className="ecampus" href={"https://ecampus.ius.edu.ba/" + item.Url}>
          {item.course_name}
        </a>
      </td>
      <td>{item.Lecturer}</td>
      <td>{item.AcademicUnit}</td>
      <td>
        {item.prerequisite.map((preq: string) => {
          return preq + " ";
        })}
      </td>
      <td>
        <div className="button">
          <form>
            <button
              id="work"
              className="courseBtn"
              // onClick={() => this.onAddItem(item._id)}
            >
              Add Course
            </button>
          </form>
        </div>
      </td>
    </tr>
  ));

  ////////////////////////////////////////////////////
  //   axios
  //   .get(
  //     "http://localhost:5000/users/userCourse?token=" +
  //       Cookie.get("token") +
  //       "&userId=" +
  //       Cookie.get("userId")
  //   )
  //   .then((res) => {
  //     this.setState({
  //       userCourse: res.data[0].courses,
  //     });
  //   })
  //   .catch((err) => alert("Error: " + err));

  // this.setState({
  //   data: res.array,
  //   default: res.array,
  // });
  // }

  /*  onChangeCourse = (event) => {
this.setState({ course: event.target.value });
}; */

  // async onAddItem(course) {
  // console.log("onAddItem stuff");
  // console.log(course);
  // axios
  //   .post(
  //     "http://localhost:5000/users/addCourse?token=" +
  //       Cookie.get("token") +
  //       "&userId=" +
  //       Cookie.get("userId"),
  //     { courseId: course }
  //   )
  //   .then((res) => {
  //     console.log("Success");
  //   })
  //   .catch((err) => alert("Error: " + err));
  // }

  // // Search impelmentation
  // onSearch(e) {
  // e.preventDefault();
  // this.setState({
  //   search: e.target.value,
  // });
  // console.log(e.target.value);

  // if (e.target.value === 0) {
  //   this.setState({
  //     data: this.state.default,
  //   });
  //   return;
  // } else if (e.target.value.length < 3) return;

  // axios
  //   .get(
  //     "http://localhost:5000/courses/search?value=" +
  //       e.target.value +
  //       "&token=" +
  //       Cookie.get("token") +
  //       "&userId=" +
  //       Cookie.get("userId")
  //   )
  //   .then((res) => {
  //     console.log(res.data);

  //     this.setState({ data: res.data });
  //   })
  //   .catch((err) => {
  //     alert("Error: " + err);
  //   });
  // }
  ///////////////////////////////////////////////////
  return (
    // <QueryClientProvider client={queryClient}>
    <div className="addCourses">
      <div className="allCourses" id="allCourses">
        <table className="courses">
          <tbody>
            <tr>
              <th className="semesterNum" colSpan={6}>
                All courses
              </th>
            </tr>
            <tr className="info">
              <td>Course Code</td>
              <td>Course Name</td>
              <td>Professor</td>
              <td>Faculty</td>
              <td>Prerequisites</td>
              <td>Option</td>
            </tr>
            {maybe}
          </tbody>
        </table>
      </div>
    </div>
    // </QueryClientProvider>
  );
};
