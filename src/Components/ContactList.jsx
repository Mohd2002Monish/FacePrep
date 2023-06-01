import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import Navbar from "./Navbar";

const ContactList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?results=12&_page=${page}`
    );
    const data = await res.json();
    setUsers((prev) => [...prev, ...data.results]);
    // setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Card usersInfo={users} />
      {loading && <Loading />}
    </>
  );
};

export default ContactList;
