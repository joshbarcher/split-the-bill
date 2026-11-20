const CHOICES = [15, 18, 20];

function TipPicker({ percent, onChange }) {
  return (
    <section className="card tip-picker">
      <h2>Tip</h2>
      <div className="choices">
        {CHOICES.map((choice) => (
          <button
            key={choice}
            className={choice === percent ? "chosen" : ""}
            onClick={() => onChange(choice)}
          >
            {choice}%
          </button>
        ))}
      </div>
    </section>
  );
}

export default TipPicker;
