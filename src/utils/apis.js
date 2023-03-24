const fetchData = async () => {
    try {
        const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "ff52e6ea90msh98675f4426d6153p185e62jsn7e1ccd3fb3f6",
              "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
            },
          };
          const response = await fetch("https://house-plants2.p.rapidapi.com/all", options)
          const data = await response.json()
          return data 
        } catch (error) {
            console.log(error);
          }
        }
        
export default fetchData;