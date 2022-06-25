import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {

    const { data } = useGetLessonsQuery();

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-center">
                Cronograma de aulas
            </span>
            <ul className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <li key={lesson.id}>
                            <Lesson
                                availableAt={new Date(lesson.availableAt)}
                                title={lesson.title}
                                slug={lesson.slug}
                                type={lesson.lessonType}
                            />
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}