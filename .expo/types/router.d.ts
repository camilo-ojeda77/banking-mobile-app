/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/lib/supabase`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Register`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Splash`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/lib/supabase`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/Register`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/Splash`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/lib/supabase${`?${string}` | `#${string}` | ''}` | `/src/screens/Login${`?${string}` | `#${string}` | ''}` | `/src/screens/Register${`?${string}` | `#${string}` | ''}` | `/src/screens/Splash${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/lib/supabase`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Register`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Splash`; params?: Router.UnknownInputParams; };
    }
  }
}
