import { useContext } from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import GetDataContext from "../context/Data";
import Head from "next/head";
import {
  contractorSignUp,
  projectDetails,
  workerDetails,
} from "../../data/contractor";
import ProjectOwner from "../components/ProjectOwner";
export default function Index() {
  // console.log("contractors ", contractorSignUp);
  // console.log("projects", projectDetails);
  // console.log("works", workerDetails);

  // console.log(value);
  return (
    <>
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAUCwY4Zz6_WdPTEMx_q0LxDqVkUpZxOWE" />
      </Head>
      <ProjectOwner />
    </>
  );
}
