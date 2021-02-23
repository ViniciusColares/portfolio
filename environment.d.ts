declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONVERTKIT_API_KEY: string
      NEXT_PUBLIC_CONVERTKIT_FORM_ID: string
      NEXT_PUBLIC_CONVERTKIT_TAG_NEWSLETTER: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
