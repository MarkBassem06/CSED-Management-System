export default function MyProgress({ course }: { course: any }) {

    const progress = course.progress;
    const Course = course.course;
    const name = Course.title;
    const code = Course.code;

    return (
        <div className="border-2 border-border-dark bg-srface-dark rounded-lg p-4 my-4">
            <h4>{name}</h4>
            <div className="flex flex-row justify-between text-text-muted-dark">
                <p>{code}</p>
                <p>{progress}% completed</p>
            </div>
            <div className="w-full bg-background-dark rounded-full h-2 mt-2 mb-2">

                    <div
                        className="bg-accent-dark h-2 rounded-full transition-all duration-500"
                        style={{ width: progress + '%' }}
                    ></div>

                </div>
        </div>
    )
}