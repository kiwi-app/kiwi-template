import Counter from '@/components/counter';

export interface ReduxUsageProps {
  title: string;
  initialValue: number;
}

export default function ReduxUsage(props: ReduxUsageProps) {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="stats shadow min-w-[25%]">
        <div className="stat">
          <div className="stat-title">{props.title}</div>
          <div className="stat-value">
            <Counter initialValue={props.initialValue} />
          </div>
          <div className="stat-desc mt-4">Click to update redux state</div>
        </div>
      </div>
    </div>
  );
}
