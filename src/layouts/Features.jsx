import Feature from "../components/Feature"

export default function Features() {
return (
<section className="mt-20 flex flex-col justify-between mb-9 md:flex-row md:flex-wrap">
<Feature
imgSrc = {"wired-outline-245-edit-document.json"}
title = {'Create Tasks Effortlessly'} 
content = {"Say goodbye to messy sticky notes and scattered to-do lists. With TaskTern, creating tasks is a breeze. Simply type in your task, set a due date, and add any necessary details. Whether it's a personal project, work assignment, or a reminder, We've has got you covered."}
/>
<Feature
imgSrc = {"wired-lineal-212-arrow-1-rounded.json"}
title = {"Smart and Flexible Scheduling"} 
content = {"Take control of your time like never before. TaskTern's advanced scheduling feature allows you to set due dates, deadlines, and reminders for each task. Whether you prefer a day view, week view, or a custom calendar, TaskTern adapts to your preferences and keeps you on track."}
/>
<Feature 
imgSrc = {"wired-lineal-134-target.json"}
title = {"Prioritize Your Goals"} 
content = {"Not all tasks are created equal, and we understand that. With TaskTern, you can easily prioritize your goals and focus on what matters most. Assign labels, tags, or colors to your tasks, so you can instantly identify urgent tasks, important projects, or personal milestones."}
/>
<Feature
imgSrc = {"wired-lineal-153-bar-chart-growth.json"}
title = {"Track Progress and Achievements"} 
content = {"Celebrate your accomplishments and monitor your progress with TaskTerns's insightful analytics. Visualize your completed tasks, set milestones, and gain valuable insights into your productivity patterns. Stay motivated as you see your to-do list shrink and your achievements grow.Stay Productive Anywhere Your to-do list is always at your fingertips."}
/>
</section>
)
}
