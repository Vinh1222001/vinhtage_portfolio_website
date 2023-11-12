import { getall } from "../Modal/MediaModal"
// Define the type for the setDataFunc parameter
type SetDataFunc = (data: any) => void; // Replace 'any' with the actual type of 'data'

export async function GetAllMedias(setDataFunc: SetDataFunc) {
  try {
    const response = await getall();
    setDataFunc(response);
  } catch (error) {
    console.log(error);
  }
}