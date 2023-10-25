import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateProps {
  placeholder: string;
  startDate?: Date;
  endDate?: Date;
  onChange: (a: any, b: string | undefined) => void;
  type?: string;
}

export default function RangeDatePicker(props: DateProps) {
  const { placeholder, type, startDate, endDate, onChange } = props;

  const onChangeRange = (v: [Date | null, Date | null]) => {
    onChange && onChange(v, type);
  };

  return (
    <Box>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeRange}
        isClearable={true}
        className="borderLess"
        placeholderText={placeholder}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 56px;
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
    height: 56px;
  }
  .borderLess {
    width: 100%;
    height: 56px;
    box-sizing: border-box;
    padding-inline: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-weight: 400;
    font-family: unset !important;
    font-size: 14px !important;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  .react-datepicker {
    font-size: 14px;
    background-color: #fff;
    display: inline-block;
    position: relative;
    border: 1px solid #eee;
    border-radius: 6px;
  }
  .react-datepicker__header {
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
  }

  .react-datepicker__today-button {
    background: rgba(255, 255, 255, 0.05);
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #000;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #333;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    color: #fff !important;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    color: #fff;
  }

  .react-datepicker__close-icon {
    right: -10px;
    &:after {
      background-color: #a16eff;
    }
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    color: #0c0d0d;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    color: #0c0d0d;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 84px;
  }
  .react-datepicker__time-list {
    background-color: #fff;
    li {
      font-size: 12px;
      line-height: 2.5em;
    }
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::after {
    border-top-color: #eee;
  }
  .react-datepicker__time-container .react-datepicker__time {
    background: transparent;
  }
  .react-datepicker__input-container input.borderLess {
    font-size: 1rem;
    background: transparent;
    min-width: 200px;
    font-family: Inter-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
