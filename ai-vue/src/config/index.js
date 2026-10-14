export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'
export const fileBaseUrl = import.meta.env.VITE_FILE_BASE_URL || ''

export const resolveFileUrl = (path) => {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path

  const base = fileBaseUrl.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
