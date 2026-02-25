import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {
  return (
    <div className="flex justify-center bg-blue-400 text-white">
        <div className="container flex flex-col items-center py-4">
            <p className="text-x1 font-semibold"> 
                Desenvolvido por Larissa de Souza • 2026
            </p>
            <div className='flex gap-2 py-2'>
                <a href="https://www.linkedin.com/in/lari-souza" target="_blank">
                    <LinkedinLogoIcon size={48} weight='regular'/>
                </a>
                <a href="https://github.com/dev-lari" target="_blank">
                <GithubLogoIcon size={48} weight='regular'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer