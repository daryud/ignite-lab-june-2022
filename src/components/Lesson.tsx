import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { NavLink } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date,
    type: 'live' | 'class';
}

export function Lesson({availableAt, type, title, slug}: LessonProps) {

    const isLessonAvailable = isPast(availableAt);
    const availableDateFormated = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    });

    return (
        <NavLink to={`/event/lesson/${slug}`} className="group parent">
            <span className="text-gray-300">
                {availableDateFormated}
            </span>
            <div className="rounded border border-gray-600 p-4 mt-4 group-hover:border-green-700 transition-colors parent-active:bg-green-500">
                <header className="flex justify-between items-center ">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2 parent-active:text-white">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    
                    <span className="text-xs font-bold text-white py-[0.125rem] px-2 rounded border border-green-300 block parent-active:text-white parent-active:border-white">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="mt-4 block parent-active:text-white">{title}</strong>
            </div>
        </NavLink>
    )
}