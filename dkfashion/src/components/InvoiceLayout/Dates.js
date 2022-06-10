import { useSelector } from "react-redux";

export default function Dates({ InvoiceNumber }) {
  const orderDetails = useSelector((state) => state.user.orderDetails);

  const maxNumber = 45;
  const randomNumber = Math.floor(Math.random() * maxNumber + 1 * 978754);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const formatDate2 = (date) => {
    const month = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    if (date) {
      const d = new Date(date);
      return `${d.getDate()}/${month[d.getMonth()]}/${d.getFullYear()}`;
    }
  };

  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li>
            <span className="font-bold">Invoicer Number:{InvoiceNumber}</span>
          </li>
          <li>
            <span className="font-bold">Invoicer Date: {date}</span>
          </li>

          <li>
            <span className="font-bold">
              {orderDetails.orderStatus[0].isCompleted &&
                `Ordered Date:
                ${formatDate2(orderDetails.orderStatus[0].date)}`}
            </span>
          </li>
        </ul>
      </article>
    </>
  );
}
