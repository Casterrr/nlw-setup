import '../styles/global.css'

interface HabitProps {
    completed: number
}
  
export function Habit(props: HabitProps) {
return (
    <div className="bg-zinc-900 hover:bg-sky-700 cursor-pointer w-10 h-10 text-white rounded m-2 flex items-center justify-center">
    {props.completed}
    </div>
);
}