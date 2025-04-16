// Environment variable configuration
const env = {
  // Google Gemini API Key
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,

  // Validate that required environment variables are set
  validate: () => {
    const required = ["GEMINI_API_KEY"]

    const missing = required.filter((key) => !process.env[key])

    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(", ")}`)
    }

    return true
  },
}

export default env
