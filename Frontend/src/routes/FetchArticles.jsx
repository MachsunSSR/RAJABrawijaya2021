export const getArticles = async () => {
   const data = await fetch('http://103.139.244.67/articles');
   const res = await data.json();
   return res;
};