export interface CreateModelData {
  sourceTableName: string;
  fields: [string];
  primaryKey: string;
}

export interface UpdateModelData {
  fields: [string];
  primaryKey: string;
}

export interface ColumnMetadataInput {
  id: number;
  displayName: string;
  description: string;
}

export interface CalculatedFieldMetadataInput {
  id: number;
  description: string;
}

export interface RelationshipMetadataInput {
  id: number;
  description: string;
}

export interface UpdateModelMetadataInput {
  displayName: string;
  description: string;
  columns: Array<ColumnMetadataInput>;
  calculatedFields: Array<CalculatedFieldMetadataInput>;
  relationships: Array<RelationshipMetadataInput>;
}

export enum ExpressionName {
  ABS = 'ABS',
  AVG = 'AVG',
  COUNT = 'COUNT',
  MAX = 'MAX',
  MIN = 'MIN',
  SUM = 'SUM',
  CBRT = 'CBRT',
  CEIL = 'CEIL',
  EXP = 'EXP',
  FLOOR = 'FLOOR',
  LN = 'LN',
  LOG10 = 'LOG10',
  ROUND = 'ROUND',
  SIGN = 'SIGN',
  LENGTH = 'LENGTH',
  REVERSE = 'REVERSE',
}

export interface CreateCalculatedFieldData {
  modelId: number;
  name: string;
  expression: ExpressionName;
  lineage: number[];
}

export interface UpdateCalculatedFieldData {
  name: string;
  expression: ExpressionName;
  lineage: number[];
}
