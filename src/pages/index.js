import { useContext } from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import GetDataContext from "../context/Data";
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
      <ProjectOwner />
    </>
  );
}
