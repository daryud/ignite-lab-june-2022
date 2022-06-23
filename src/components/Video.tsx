import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react"

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">

                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-6">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - Criando o projeto e realizando o setup inicial
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src="https://github.com/daryud.png"
                                alt="perfil"
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Darin Formax</strong>
                                <strong className="text-gray-200 text-sm block">Aluno Rocketseat</strong>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm rounded bg-green-500 flex items-center font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade no Discord
                        </a>

                        <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 rounded flex items-center font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 gap-8">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="text-sm mt-2 text-gray-200">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm mt-2 text-gray-200">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}