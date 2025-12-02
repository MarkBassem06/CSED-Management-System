import MyProgressHeading from "../components/MyProgressHeading"
import MyProgressCourse from "../components/MyProgressCourses"
import MyProgressUpcomingDeadlines from "../components/MyProgressUpcomingDeadlines"
import { TrendingUp, CheckCircle2, CalendarDays, Clock } from "lucide-react"
import userData from "../lib/userData.json"


export default function MyProgress() {
  const user = userData;
  let tasksCompleted = 0;
  for (const task of user.MyTasks) {
    tasksCompleted += task.isCompleted ? 1 : 0;
  }
  const level = user.level || 0;
  const courses = user.userCourses || [];
  const tasks = user.MyTasks || [];
  return (
    <div className="leading-10 font-sans">
      <h1 className="font-bold text-2xl text-text-dark">My Progress</h1>
      <h3 className="text-text-muted-dark">Track your academic performance and achievements</h3>

      <div className="grid grid-cols-4 gap-2 my-6 h-auto">
        <MyProgressHeading
          title="Overall Progress"
          subtitle={`${(level / 4) * 100}%`}
          description={`level ${level} completion`}
          icon={
            <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
              <TrendingUp size={20} />
            </div>
          }
        />
        <MyProgressHeading
          title="Tasks Completed"
          subtitle={`${tasksCompleted}/${user.MyTasks.length}`}
          description="This semester"
          icon={
            <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
              <CheckCircle2 size={20} />
            </div>
          }
        />
        <MyProgressHeading
          title="Study Streak"
          subtitle={`${user.streak} days`}
          description="Keep it up!🔥"
          icon={
            <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
              <CalendarDays size={20} />
            </div>
          }
        />
        <MyProgressHeading
          title="Pending Tasks"
          subtitle={`${user.MyTasks.length - tasksCompleted} tasks`}
          description="Due soon"
          icon={
            <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
              <Clock size={20} />
            </div>
          }
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="bg-surface-dark rounded-xl border-2 border-border-dark p-6 flex-3 h-3/5">
          <h2 className="font-semibold text-xl text-text-dark">Course Progress</h2>
          <h4 className="text-text-muted-dark">Your progress in each active course</h4>
          <div>
            {courses.map((course, index) => (
              <MyProgressCourse key={index} course={course} />
            ))}
          </div>
        </div>
        <div className="bg-surface-dark rounded-xl border-2 border-border-dark p-6 flex-2">
          <div className="flex flex-row justify-start gap-2 items-center">
            <Clock size={20} />
            <h2 className="font-semibold text-xl text-text-dark">Upcoming Deadlines</h2>
          </div>
          <div>
            {tasks
              .filter(task => task.isCompleted === false)
              .map((task, index) => (
                <MyProgressUpcomingDeadlines key={index} task={task} />
              ))}

          </div>
        </div>
      </div>
    </div>
  )
}