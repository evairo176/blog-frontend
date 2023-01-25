import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostAction } from "../../redux/slices/posts/postSlices";
import CategoryFilter from "../../utils/CategoryFilter";
import { useSearchDebounce } from "../../utils/Delay";
import ListPostComponent from "../../utils/ListPostComponent";
import PaginationComponent from "../../utils/PaginationComponent";
import Search from "../../utils/Search";
import SortComponent from "../../utils/SortComponent";
import TableComponent from "../../utils/TableComponent";
import Navbar from "../cummon/Navbar";

function HomeMenu() {
  // const [postList, setpostList] = useState({});
  const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchDebounce();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllPostAction({
        search: search,
        sort: sort,
        filterCategory: filterCategory,
        page: page,
      })
    );
  }, [dispatch, sort, page, filterCategory, search]);

  const storeData = useSelector((store) => store?.posts);
  const { postList, appErr, serverErr, loading } = storeData;
  // console.log(postList);

  // useEffect(() => {
  //   fetchAllPost();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sort, page, filterCategory, search]);

  // const fetchAllPost = async () => {
  //   try {
  //     const url = `${process.env.REACT_APP_API_URL}/posts?page=${page}&sort=${
  //       sort.sort
  //     },${sort.order}&category=${filterCategory.toString()}&search=${search}`;

  //     const { data } = await axios.get(url);
  //     setpostList(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Fragment>
      <Navbar />
      <div className="container-content-blog">
        <div className="row">
          <div className="col-xl-8 col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <ListPostComponent
              data={postList?.post ? postList?.post : []}
              loading={loading}
              page={page}
              limit={postList?.limit ? postList?.limit : null}
              total={postList?.total ? postList?.total : null}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <h1>Web Blog</h1>
        <div className="form-group">
          <Search setSearch={(value) => setSearch(value)} />
        </div>
        <div>
          sort <SortComponent sort={sort} setSort={(sort) => setSort(sort)} />
          <div>
            <CategoryFilter
              filterCategory={filterCategory}
              categories={postList?.category ? postList?.category : []}
              setFilterCategory={(category) => setFilterCategory(category)}
            />
          </div>
        </div>
        <div className="mr-5">
          <TableComponent
            data={postList?.post ? postList?.post : []}
            loading={loading}
            page={page}
            limit={postList?.limit ? postList?.limit : null}
            total={postList?.total ? postList?.total : null}
          />
        </div>
        <PaginationComponent
          page={page}
          limit={postList?.limit ? postList?.limit : 0}
          total={postList?.total ? postList?.total : 0}
          setPage={(page) => setPage(page)}
        />
      </div>
    </Fragment>
  );
}

export default HomeMenu;
