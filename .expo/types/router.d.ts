/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}/og-llm-chat-screen-for-reference` | `/og-llm-chat-screen-for-reference`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}/settings` | `/settings`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(drawer)'}/og-llm-chat-screen-for-reference` | `/og-llm-chat-screen-for-reference`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(drawer)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(drawer)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(drawer)'}/og-llm-chat-screen-for-reference${`?${string}` | `#${string}` | ''}` | `/og-llm-chat-screen-for-reference${`?${string}` | `#${string}` | ''}` | `${'/(drawer)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}/og-llm-chat-screen-for-reference` | `/og-llm-chat-screen-for-reference`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}/settings` | `/settings`; params?: Router.UnknownInputParams; };
    }
  }
}
