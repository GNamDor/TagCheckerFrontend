
// I would normally put this in an environment variable but as the backend has CORS disallowed for 
// browsers and as this is a toy case
const API_BASE_URL = 'https://gnamd.pythonanywhere.com'; 

export async function PostTags(query) {
  const res = await fetch(`${API_BASE_URL}/api/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
}

