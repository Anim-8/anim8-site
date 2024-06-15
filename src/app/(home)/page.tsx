import { NextPage } from "next";
import Landing from "./Landing";
import MissionStatement from "./MissionStatement";
import Essential from "./Essential";

const Home:NextPage = () => {
  return (
    <>
      <Landing />
      <MissionStatement />
      <Essential />
    </>
  );
}

export default Home;