import supabase from "../supabase.config";

export const getall=async()=>{
   
    

    let { data: media, error } = await supabase
    .from('media')
    .select('*')  


  if(error){
    console.log("Error fetching all the comments", error)
    return null;
  }else {
      
    return media
  }

} 