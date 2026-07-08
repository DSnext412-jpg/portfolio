const token = import.meta.env.VITE_GITHUB_TOKEN

export async function githubFetch(url: string) {
  const headers: Record<string, string> = {}
  if (token) headers.Authorization = `token ${token}`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  return res
}

export async function githubJson<T>(url: string): Promise<T> {
  const res = await githubFetch(url)
  return res.json()
}
