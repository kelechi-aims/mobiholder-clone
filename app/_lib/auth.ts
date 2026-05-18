const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const apiRequest = async (
  endpoint: string,
  method: HttpMethod,
  body?: unknown,
  token?: string,
) => {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  console.log("API Response:", data);

  if (!response.ok) {
    throw new Error(
      (data as { message?: string; error?: string }).message ||
        (data as { message?: string; error?: string }).error ||
        "API request failed",
    );
  }

  return data;
};
