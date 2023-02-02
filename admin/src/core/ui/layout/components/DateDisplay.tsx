import { DateTimeUtils } from '../../../util/dateTimeUtils';

const DateDisplay = ({ date }: { date?: string }) => {
  return <>{DateTimeUtils.parseTableTime(date)}</>;
};

export default DateDisplay;
