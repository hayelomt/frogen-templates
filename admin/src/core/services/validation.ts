import validator from 'validator';
import _ from 'lodash';

type RuleResponse = { valid: boolean; msg: string };

export const Validator = {
  isEmail(field: string, val: string | undefined): RuleResponse {
    return {
      valid: validator.isEmail(val as any),
      msg: `${field} is not a valid email`,
    };
  },

  isString(field: string, val: string | undefined): RuleResponse {
    return {
      valid: typeof val === 'string',
      msg: `${field} must be valid string`,
    };
  },

  isNotEmpty(field: string, val: any): RuleResponse {
    return {
      valid: !_.isEmpty(val),
      msg: `${field} can not be empty`,
    };
  },

  isNumber(field: string, val: number): RuleResponse {
    return {
      valid: typeof val === 'number',
      msg: `${field} must be valid number`,
    };
  },
};

export const validateRules = (rules: RuleResponse[]): string | null => {
  for (const rule of rules) {
    if (!rule.valid) {
      return rule.msg;
    }
  }

  return null;
};
