import { getChannelVideos } from "@/GoogleAPI/YoutubeAPI";

type SetDataFunc = (data: any) => void; // Replace 'any' with the actual type of 'data'

export async function GetAllAnimation(setDataFunc: SetDataFunc) {
  try {
    const response = await getChannelVideos();
    setDataFunc(response);
  } catch (error) {
    console.log(error);
  }
}