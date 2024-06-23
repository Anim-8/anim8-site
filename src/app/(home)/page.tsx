import { NextPage } from "next";
import Landing from "./Landing";
import MissionStatement from "./MissionStatement";
import Connect from "./Connect";
import Team from "./Team";
import Business from "./Business";

const Home:NextPage = () => {
  return (
    <>
      <Landing />
      <MissionStatement />
      <Business />
      <Team />
      <Connect />
    </>
  );
}

export default Home;