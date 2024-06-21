import { NextPage } from "next";
import Landing from "./Landing";
import MissionStatement from "./MissionStatement";
import Essential from "./Essential";
import Approach from "./Approach";
import Connect from "./Connect";
import Team from "./Team";

const Home:NextPage = () => {
  return (
    <>
      <Landing />
      <MissionStatement />
      <Essential />
      <Approach />
      <Team />
      <Connect />
    </>
  );
}

export default Home;