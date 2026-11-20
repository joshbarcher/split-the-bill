import { billSummary, formatMoney } from "../bill.js";

function Summary({ cents, percent, people }) {
  const { tip, total, each } = billSummary(cents, percent, people);

  return (
    <section className="card summary">
      <p>
        Tip <span>{formatMoney(tip)}</span>
      </p>
      <p>
        Total <span>{formatMoney(total)}</span>
      </p>
      <p className="each">
        Each pays <span>{formatMoney(each)}</span>
      </p>
    </section>
  );
}

export default Summary;
