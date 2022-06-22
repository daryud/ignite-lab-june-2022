import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date,
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    return (
        <a href="#">
            <span className="text-gray-300">
                {props.availableAt.toString()}
            </span>
            <div className="rounded border border-gray-600 p-4 mt-4">
                <header className="flex justify-between items-center ">
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    <span className="text-xs font-bold text-white py-[0.125rem] px-2 rounded border border-green-300 block">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="mt-4 block">{props.title}</strong>
            </div>
        </a>
    )
}