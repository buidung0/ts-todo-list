import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    // Kiểm tra xem các tham chiếu có tồn tại không và giá trị có được nhập không
    if (goal.current && summary.current && goal.current.value.trim() && summary.current.value.trim()) {
      const enteredGoal = goal.current.value;
      const enteredSummary = summary.current.value;

      event.currentTarget.reset();
      onAddGoal(enteredGoal, enteredSummary);
    } else {
      alert('Please enter both goal and summary');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
