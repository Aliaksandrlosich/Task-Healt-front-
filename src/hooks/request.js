import { useState, useCallback } from 'react'

const useRequest = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(url, { method, body, headers, credentials: 'include' })
      const data = await response.json()

      setLoading(false)
      return { status: response.status, ...data }
    } catch (error) {
      setLoading(false)
      setError(error.message)
      throw error
    }
  }, [])

  const clearError = () => setError(null)

  return { loading, error, request, clearError }
}

export default useRequest
