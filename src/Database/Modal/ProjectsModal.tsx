import supabase from "../supabase.config";

export const getallprojects=async()=>{

    let { data: projects, error } = await supabase
    .from('projects')
    .select(`
      *,
      media (
        *
      )
    `)            
      
  if(error){
    console.log("Error fetching all the comments", error)
    return null;
  }else {
    // console.log(projects);
    
    return projects
  }

} 