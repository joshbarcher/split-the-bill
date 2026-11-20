function PeopleCounter({ people, onChange }) {
  return (
    <section className="card people-counter">
      <h2>People</h2>
      <div className="counter">
        <button onClick={() => onChange(Math.max(people - 1, 1))}>−</button>
        <span>{people}</span>
        <button onClick={() => onChange(people + 1)}>+</button>
      </div>
    </section>
  );
}

export default PeopleCounter;
