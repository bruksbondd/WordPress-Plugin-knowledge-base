export const host = window.location.origin

const fetchData = (url) => {
     const loadData = async () => {
         const response = await fetch(`${host}/wp-json/wp/v2/${url}`);
         if(!response.ok) {
             // oups! something went wrong
             return;
         }
         return await response.json();
     }
     return loadData();
}

export default fetchData