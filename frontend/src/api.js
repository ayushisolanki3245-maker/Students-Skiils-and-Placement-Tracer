const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function authRequest(endpoint, body) {
  const data = await apiRequest(`/api/auth/${endpoint}`, { method: 'POST', body, authenticated: false });
  if (!data.token) throw new Error('The server did not return an authentication token.');
  localStorage.setItem('token', data.token);
  return data;
}

export async function apiRequest(path, { method = 'GET', body, authenticated = true } = {}) {
  let response;

  try {
    const headers = {};
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    const token = localStorage.getItem('token');
    if (authenticated && token) headers.Authorization = `Bearer ${token}`;
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
  } catch {
    throw new Error('Could not connect to the server. Check that the backend is running.');
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'The request failed. Please try again.');
  }
  return data;
}
