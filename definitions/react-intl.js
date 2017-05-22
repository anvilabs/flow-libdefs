/* @flow */

/* Locale data */
type LocaleDataType = {
  locale: string,
  [key: string]: any,
};
type IntlProviderPropsType = {|
  locale?: string,
  formats?: Object,
  messages?: {[id: string]: string},
  defaultLocale?: string,
  defaultFormats?: Object,
  textComponent?: string,
  initialNow?: any,
  children?: React$Element<any>,
|};

/* Core */
type MessageDescriptorType = {|
  id: string,
  defaultMessage?: string,
  description?: string | Object,
|};
type NumberFormatOptionsType = {|
  localeMatcher?: 'best fit' | 'lookup',
  style?: 'decimal' | 'currency' | 'percent',
  currency?: string,
  currencyDisplay?: 'symbol' | 'code' | 'name',
  useGrouping?: boolean,
  minimumIntegerDigits?: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  minimumSignificantDigits?: number,
  maximumSignificantDigits?: number,
|};
type DateTimeFormatOptionsType = {|
  localeMatcher?: 'best fit' | 'lookup',
  formatMatcher?: 'basic' | 'best fit',
  timeZone?: string,
  hour12?: boolean,
  weekday?: 'narrow' | 'short' | 'long',
  era?: 'narrow' | 'short' | 'long',
  year?: 'numeric' | '2-digit',
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day?: 'numeric' | '2-digit',
  hour?: 'numeric' | '2-digit',
  minute?: 'numeric' | '2-digit',
  second?: 'numeric' | '2-digit',
  timeZoneName?: 'short' | 'long',
|};
type RelativeFormatOptionsType = {|
  style?: 'best fit' | 'numeric',
  units?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
|};
type PluralFormatOptionsType = {|
  style?: 'cardinal' | 'ordinal',
|};
type IntlConfigType = {
  locale: string,
  formats: Object,
  messages: {[id: string]: string},
  defaultLocale: string,
  defaultFormats: Object,
};
type IntlFormatType = {
  formatDate: (
    value: any,
    options?: DateTimeFormatOptionsType & {format?: string},
  ) => string,
  formatTime: (
    value: any,
    options?: DateTimeFormatOptionsType & {format?: string},
  ) => string,
  formatRelative: (
    value: any,
    options?: RelativeFormatOptionsType & {
      format?: string,
      now?: any,
    },
  ) => string,
  formatNumber: (
    value: any,
    options?: NumberFormatOptionsType & {format?: string},
  ) => string,
  formatPlural: (
    value: any,
    options?: PluralFormatOptionsType,
  ) => 'zero' | 'one' | 'two' | 'few' | 'many' | 'other',
  formatMessage: (
    messageDescriptor: MessageDescriptorType,
    values?: Object,
  ) => string,
  formatHTMLMessage: (
    messageDescriptor: MessageDescriptorType,
    values?: Object,
  ) => string,
};
type IntlType = IntlConfigType & IntlFormatType & {now: () => number};

/* Components */
type FormattedMessagePropsType = {|
  /* :: ...MessageDescriptorType, */
  values?: {+[key: string]: string | number},
  tagName?: string,
  children?: (
    ...formattedMessage: Array<React$Element<any>>
  ) => React$Element<any>,
|};
type FormattedNumberPropsType = {|
  /* :: ...NumberFormatOptionsType, */
  value: any,
  format?: string,
  children?: (formattedNumber: string) => React$Element<any>,
|};
type FormattedDatePropsType = {|
  /* :: ...DateTimeFormatOptionsType, */
  value: any,
  format?: string,
  children?: (formattedDate: string) => React$Element<any>,
|};

/* HOCs */
type ClassComponentType<D, P, S> = Class<React$Component<D, P, S>>;
type StatelessComponentType<P> = (props: P) => ?React$Element<any>;
type ComponentType<D, P> =
  | StatelessComponentType<P>
  | ClassComponentType<D, P, any>;

declare module 'react-intl' {
  /* Locale data */
  declare function addLocaleData(
    data: LocaleDataType | Array<LocaleDataType>,
  ): void;
  declare var IntlProvider: Class<
    React$Component<void, IntlProviderPropsType, void>,
  >;

  /* Components */
  declare var FormattedMessage: ClassComponentType<
    void,
    FormattedMessagePropsType,
    void,
  >;
  declare var FormattedNumber: ClassComponentType<
    void,
    FormattedNumberPropsType,
    void,
  >;
  declare var FormattedDate: ClassComponentType<
    void,
    FormattedDatePropsType,
    void,
  >;

  /* HOCs */
  declare function injectIntl<D, OP>(
    component: ComponentType<
      D,
      $Supertype<{
        /* :: ...$Exact<OP>, */
        intl: IntlType,
      }>,
    >,
  ): ClassComponentType<D, OP, void>;
}
