/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
declare module '@mailchimp/mailchimp_marketing' {
  type Config = {
    apiKey?: string
    accessToken?: string
    server?: string
  }

  type SetListMemberOptions = {
    skipMergeValidation: boolean
  }

  export type SetListMemberBody = {
    email_address: string
    status_if_new:
      | 'subscribed'
      | 'unsubscribed'
      | 'cleaned'
      | 'pending'
      | 'transactional'
    merge_fields?: { [key: string]: any }
  }

  export default {
    setConfig: (config: Config): void => {
      return config
    },
    lists: {
      setListMember: (
        listId: string,
        subscriberHash: string,
        body: SetListMemberBody,
        opts?: SetListMemberOptions
      ): Promise<void> => {
        return
      }
    },
    ping: {
      get: (): void => {
        return
      }
    }
  }
}
