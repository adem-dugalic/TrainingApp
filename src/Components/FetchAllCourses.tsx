import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useQuery } from "react-query";

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

export function FetchAllCourses() {
  const { data, status } = useQuery("courses", fetchCourses);
  return { data, status };
}
