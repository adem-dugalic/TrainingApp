import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useQuery } from "react-query";

interface AllCoursesTableProps {}

const fetchCourses = async () => {
  const res = await fetch(
    "http://localhost:5000/courses?" +
      "&token=" +
      Cookie.get("token") +
      "&userId=" +
      Cookie.get("userId")
  );
  return res.json();
};

export const AllCoursesTable: React.FC<AllCoursesTableProps> = ({}) => {
  // const[defaultSt, setDefaultSt] = useState(); // array
  // const[userCourse, setUserCourse]= useState();//array
  // const[courseData, setCourseData]= useState();//array
  // const[page, setPage]= useState();
  // const[courseId, setCourseId]= useState();//array
  // const[userId, setUserId]= useState();
  // const[courseID, setCourseID]= useState();

  // search
  // const[search, setSearch]= useState();
  ////////////////////////////////////////////////////////////////

  const { data, status } = useQuery("courses", fetchCourses);

  // const [Data,setData]=useState({
  //   prerequisite: [],
  //   dataTest: [],
  //   _id: '',
  //   course_id: '',
  //   course_name: '',
  //   Lecturer: '',
  //   AcademicUnit: ''
  // })
  if (status === "error") {
    return <div>Error</div>;
  }
  if (status === "loading") {
    return <div>Loading</div>;
  }

  console.log(data.array[0].Lecturer);
  console.log(status);

  //const [testingArr, setTestingArr] = useState(data.array);

  // setData({prerequisite:data.array.prerequisite})
  const maybe = data.array.map((item: any) => (
    <tr
    // key = {item.course_id}
    // style={
    //   this.state.userCourse.includes(item._id) > 0
    //     ? { display: "none" }
    //     : { background: "#353131" }
    // }
    >
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

  // async updateTable() {
  // const response = await fetch(
  //   "http://localhost:5000/courses?page=" +
  //     this.state.page +
  //     "&token=" +
  //     Cookie.get("token") +
  //     "&userId=" +
  //     Cookie.get("userId")
  // );
  // const res = await response.json();

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
