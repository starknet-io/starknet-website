type CmsCrowdin = {
  crowdin: boolean
}
type CmsCrowdinOptional = {
  crowdin?: boolean
}

export type CmsFieldObject = Omit<import('netlify-cms-core').CmsFieldObject, 'fields'> & {
  fields: CmsField[];
}

export type CmsFieldList = Omit<import('netlify-cms-core').CmsFieldList, 'field' | 'fields' | 'types'> & {
  field?: CmsField;
  fields?: CmsField[];
  types?: (import('netlify-cms-core').CmsFieldBase & CmsFieldObject)[];
}

export type CmsFieldString = CmsCrowdin & {
  widget: 'string';
  default?: string;
}

export interface CmsFieldText {
  widget: 'text';
  default?: string;
}

export interface CmsFieldUUID {
  widget: 'uuid';
  default?: string;
}

export interface CmsFieldYouTube {
  widget: 'youtube';
  default?: string;
}

export type CmsField =
  import('netlify-cms-core').CmsFieldBase & CmsCrowdinOptional &
  (
    | import('netlify-cms-core').CmsFieldBoolean
    | import('netlify-cms-core').CmsFieldCode
    | import('netlify-cms-core').CmsFieldColor
    | import('netlify-cms-core').CmsFieldDateTime
    | import('netlify-cms-core').CmsFieldFileOrImage
    | CmsFieldList
    | import('netlify-cms-core').CmsFieldMap
    | import('netlify-cms-core').CmsFieldMarkdown
    | import('netlify-cms-core').CmsFieldNumber
    | CmsFieldObject
    | import('netlify-cms-core').CmsFieldRelation
    | import('netlify-cms-core').CmsFieldSelect
    | import('netlify-cms-core').CmsFieldHidden
    | CmsFieldString
    | CmsFieldText
    | CmsFieldUUID
    | CmsFieldYouTube
    | import('netlify-cms-core').CmsFieldMeta
  );

export type CmsCollectionFile = Omit<import('netlify-cms-core').CmsCollectionFile, 'fields'> & CmsCrowdin & {
  fields: CmsField[];
}

export type CmsCollection = Omit<import('netlify-cms-core').CmsCollection, 'files' | 'fields'> & CmsCrowdin & {
  files?: CmsCollectionFile[];
  fields?: CmsField[];
}

export type CmsConfig = Omit<import('netlify-cms-core').CmsConfig, 'collections'> & {
  collections: CmsCollection[];
}
