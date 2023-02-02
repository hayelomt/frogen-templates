import moment from 'moment';

export const DateTimeUtils = {
  parseElapsed: (date: string | undefined) =>
    date ? moment(date).fromNow() : '',

  parseTableTime: (date?: string) =>
    date ? moment(date).format('MMMM Do YYYY') : '',
};
