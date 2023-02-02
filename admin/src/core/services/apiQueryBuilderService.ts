import { FetchListArgs } from '../util/types';

const ApiQueryBuilderService = {
  parseQuery: ({ limit, curPage, sort_field, sort_op }: FetchListArgs) => {
    return `limit=${limit || 20}&page=${curPage || 1}&sort_field=${
      sort_field || 'updated_at'
    }&sort_op=${sort_op || 'desc'}`;
  },
};

export default ApiQueryBuilderService;
