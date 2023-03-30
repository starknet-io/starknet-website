/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare interface LocaleParams {
  readonly locale: string;
}

declare interface LocaleProps {
  readonly params: LocaleParams;
}
