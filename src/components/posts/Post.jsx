import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostAction } from "../../redux/slices/posts/postSlices";
import CategoryFilter from "../../utils/CategoryFilter";
import { useSearchDebounce } from "../../utils/Delay";
import ListPostComponent from "../../utils/ListPostComponent";
import Search from "../../utils/Search";
import SortComponent from "../../utils/SortComponent";
import Navbar from "../cummon/Navbar";
import PaginationCustom from "../../utils/PaginationCustom";
import SpeedDialComponent from "../../utils/SpeedDialComponent";
import BannerBlog from "../../utils/BannerBlog";

function Post() {
  // const [postList, setpostList] = useState({});
  const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchDebounce();

  const dispatch = useDispatch();

  const storeData = useSelector((store) => store?.posts);
  const storeDataUser = useSelector((store) => store?.users);
  const { postList, loading, likes, dislikes } = storeData;
  const { userAuth } = storeDataUser;
  useEffect(() => {
    dispatch(
      fetchAllPostAction({
        search: search,
        sort: sort,
        filterCategory: filterCategory,
        page: page,
      })
    );
  }, [likes, dislikes, dispatch, sort, page, filterCategory, search]);
  // test
  return (
    <Fragment>
      <Navbar />
      <div className="container-content-blog">
        <BannerBlog />
        <section className="blog-content-section">
          <nav className="content-section">
            <Search setSearch={(value) => setSearch(value)} />
            <SortComponent sort={sort} setSort={(sort) => setSort(sort)} />
          </nav>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div className="box-content-blob-category">
                <div className="p-kategory-daw">
                  Discover more of what matters to you
                </div>
                <div className="category-ddw">
                  <CategoryFilter
                    filterCategory={filterCategory}
                    categories={postList?.category ? postList?.category : []}
                    setFilterCategory={(category) =>
                      setFilterCategory(category)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div className="box-post-list">
                <ListPostComponent
                  data={postList?.post ? postList?.post : []}
                  loading={loading}
                  page={page}
                  limit={postList?.limit ? postList?.limit : 0}
                  total={postList?.total ? postList?.total : 0}
                  itemsPerPage={4}
                  userAuth={userAuth}
                  search={search}
                />
              </div>
              <div className="mt-2">
                <PaginationCustom
                  loading={loading}
                  limit={postList?.limit ? postList?.limit : 0}
                  total={postList?.total ? postList?.total : 0}
                  setPage={(page) => setPage(page)}
                />
              </div>

              <div className="text-center mt-2">
                {/* itemsPerPage, post ,setPage */}

                {/* <PaginationComponent
                page={page}
                limit={postList?.limit ? postList?.limit : 0}
                total={postList?.total ? postList?.total : 0}
                setPage={(page) => setPage(page)}
              /> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <SpeedDialComponent />
    </Fragment>
  );
}

export default Post;
