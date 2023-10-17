import { useEffect } from "react";
import MyHeroSection from "./MyHerosection";
import SearchLawyer from "./SearchLawyer";
import Service from "./Service";
import { useDispatch } from "react-redux";
import { NEW_APPOINTMENT_KO } from "../redux/action";

const HomePageComp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
  }, []);
  return (
    <>
      <MyHeroSection />
      <Service />
      <SearchLawyer />
    </>
  );
};
export default HomePageComp;
