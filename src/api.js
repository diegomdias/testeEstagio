export async function getPost(){
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await reponse.json()
  return result;
}