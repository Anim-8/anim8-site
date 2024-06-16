import { NextPage } from "next";
import Landing from "./Landing";
import MissionStatement from "./MissionStatement";
import Essential from "./Essential";
import Approach from "./Approach";

const Home:NextPage = () => {
  return (
    <>
      <Landing />
      <MissionStatement />
      <Essential />
      <Approach />
    </>
  );
}

export default Home;