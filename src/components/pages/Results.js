import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import { MainHome } from './Matches.styled';
import fetchData from '../../utils/api';


const Results = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
          const responseData = await fetchData();
          setData(responseData);
        };
        fetchDataAsync();
      }, []);
      if (!data) {
        return <div>Loading...</div>;
      }

      console.log(data);
      
    //   const route = useRoute();
    //   const { allProperties } = route.params;
      
    //   console.log(allProperties);




  return (
    <Layout>
         <MainHome>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
        RESULTS
      </Typography>
      </MainHome>
    </Layout>
  );
};

export default Results;
