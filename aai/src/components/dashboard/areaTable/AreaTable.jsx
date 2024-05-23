import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "State",
  "Payment ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Mumbai",
    order_id: 71232,
    date: "Aug 29,2022",
    customer: "Jeevan Thaul",
    status: "Successfully",
    amount: 400,
  },
  {
    id: 101,
    name: "Patna",
    order_id: 11256,
    date: "Jun 2,2022",
    customer: "Tejas Gade",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Beed",
    order_id: 18932,
    date: "Aug 9,2022",
    customer: "Pankaj Patil",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Kolkata",
    order_id: 11152,
    date: "July 26,2022",
    customer: "Rushi Pawar",
    status: "Successfully",
    amount: 100,
  },
  {
    id: 104,
    name: "Pune",
    order_id: 12332,
    date: "Jun 29,2022",
    customer: "Vijay Devkar",
    status: "Successfully",
    amount: 60,
  },
  {
    id: 105,
    name: "Goa",
    order_id: 20232,
    date: "July 14,2022",
    customer: "Saana Benurwar",
    status: "Successfully",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Donors</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>₹{dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
