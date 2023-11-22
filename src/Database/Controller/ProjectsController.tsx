import { getallprojects } from "../Modal/ProjectsModal";

// Define the type for the setDataFunc parameter
type SetDataFunc = (data: any) => void; // Replace 'any' with the actual type of 'data'

export async function GetAllProjects(setDataFunc: SetDataFunc) {
  try {
    const response = await getallprojects();
    setDataFunc(response);
  } catch (error) {
    console.log(error);
  }
}