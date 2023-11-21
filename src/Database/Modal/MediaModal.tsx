import supabase from "../supabase.config";

export const getall=async()=>{
   
    

    let { data: media, error } = await supabase
    .from('media')
    .select('*')  
    .order('created_at', { ascending: false })

  if(error){
    console.log("Error fetching all the comments", error)
    return null;
  }else {
      
    return media
  }

} 