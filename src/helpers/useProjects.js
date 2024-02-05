import axios from "axios";
import { useEffect, useState } from "react";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

   async function FetchProjects()  {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://65b1217bd16d31d11bde27fc.mockapi.io/Projects",
      );
      setProjects(response.data)
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    FetchProjects()
  },[])

  return { projects, isLoading };
};

export default useProjects;
