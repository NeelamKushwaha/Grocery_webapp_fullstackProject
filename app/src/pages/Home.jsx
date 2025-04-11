import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../apiRequest";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
// import CategoryProducts from "../components/CategoryProducts";
import Cart from "./Cart";
import { memo } from "react";
import Loader from "../components/Loader";
import { lazy } from "react";
const MyCategoryProducts = lazy(() => import("../components/CategoryProducts"));

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  height: ${(props) => props.show && "100vh"};
  overflow: ${(props) => props.show && "hidden"};
  z-index: 1;
  overflow-x: hidden;
`;

const Home = () => {
  const { user } = useSelector((state) => state.usersInfo);

  const { openCart } = useSelector((state) => state.cartInfo);

  const [categories, setCategories] = useState([]);

  const [New, setNew] = useState(true);

  // let accessToken = localStorage.getItem("accessToken");
  // let refreshToken = localStorage.getItem("refreshToken");

  // const handleRefreshToken = async () => {
  //   try {
  //     const res = await userRequest.get(
  //       `/userOperation/getAllusers/${user._id}`
  //     );

  //     console.log(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const LogoutUser = async () => {
  //   try {
  //     const res = await userRequest.post(`/user/logout/${user._id}`);

  //     console.log(res.data);

  //     if (res.data === "User logout successfully") {
  //       localStorage.clear();

  //       window.location.reload(true);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const GetProducts = useMemo(async () => {
    try {
      const res = await userRequest.get("/product/find");

      res.data.map((item) => {
        for (let key in item) {
          if (!categories.includes(item["category"]) && key === "category") {
            setCategories([...categories, item["category"]]);
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [categories]);

  useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      GetProducts;
    }

    return () => {
      isSubscribe = false;
    };
  }, [GetProducts]);

  return (
    <Container show={openCart}>
      {/* <button onClick={() => handleRefreshToken()}>Get Users</button>
      <button onClick={() => LogoutUser()}>Logout</button> */}
      <Navbar />

      {categories.length === 0 && <Loader />}
      <>
        <ProductList />

        {categories.map((item, key) => (
          <MyCategoryProducts category={item} key={key} />
        ))}
      </>

      {/* <Cart /> */}
    </Container>
  );
};

export default memo(Home);
