import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import PaginationComponent from "../../utils/PaginationComponent";
import Search from "../../utils/Search";
import SortComponent from "../../utils/SortComponent";
import TableComponent from "../../utils/TableComponent";
import Navbar from "../cummon/Navbar";

function HomeMenu() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/posts?page=${page}&sort=${
          sort.sort
        },${sort.order}&genre=${filterGenre.toString()}&search=${search}`;

        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPost();
  }, [sort, filterGenre, page, search]);

  return (
    <Fragment>
      <Navbar />
      <div className="text-center mt-2">
        <h1>Web Blog</h1>
        <div className="form-group">
          <Search setSearch={(value) => setSearch(value)} />
        </div>
        <div>
          sort <SortComponent sort={sort} setSort={(sort) => setSort(sort)} />
        </div>
        <div className="mr-5">
          <TableComponent data={obj?.post ? obj?.post : []} />
        </div>
        <PaginationComponent
          page={page}
          limit={obj?.limit ? obj?.limit : 0}
          total={obj?.total ? obj?.total : 0}
          setPage={(page) => setPage(page)}
        />
      </div>
    </Fragment>
  );
}

export default HomeMenu;
