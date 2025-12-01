import React from 'react';

interface CoursCardProps {
  title: string;
  description: string;
  code: string;
  level: number;
  iscompleted: boolean;

  numberOfMaterials: number;
  finishedMaterials: number;
}

export default function CoursCard(props: CoursCardProps) {
    const progress = props.numberOfMaterials > 0    ? (props.finishedMaterials / props.numberOfMaterials) * 100 : 0;
  return (

   <div 
      className="
        relative flex flex-col items-start p-4 rounded-2xl border-2 w-full
        
        bg-[var(--color-surface-dark)]
        border-[var(--color-border-dark)] 
        
        hover:scale-105 
        hover:border-[var(--color-primary-dark)] 
        transition-all duration-300 ease-in-out
        
        hover:shadow-lg hover:shadow-violet-900/20
      "
    >
        <div className="w-12 h-12 mb-4 bg-[#2A2A3C] border border-[#3A3A55] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-book-open fa-xl" style={{ color: "#A78BFA" }}></i>
        </div>

        {props.iscompleted && (
          <p className="absolute top-0 right-0 mb-4  bg-green-500 text-white text-xs font-semibold  rounded-lg p-2 m-6 mx-3">
           Completed
          </p>
        )}
        {(props.finishedMaterials>0)&&!props.iscompleted && (
          <p className="absolute top-0 right-0 mb-4  bg-[var(--color-warning)] text-[var(--color-text-dark)] text-xs font-semibold  rounded-lg p-2 m-6 mx-3">
           In Progress
          </p>
        )}

        <h3 className="text-lg font-semibold text-[var(--color-primary-dark)]">
            {props.title} 
        </h3>
        
        <p className="text-sm text-[#8F9EB3] mt-1">
            {props.code} • Level {props.level}
        </p>

        <p className='p-5 m-4 pl-0  ml-0 pr-0 mr-0 text-[var(--color-text-muted-dark)]'>
            {props.description}
        </p>

        <div className="w-full mt-auto"> 
            <div className="flex justify-between text-xs text-[#8F9EB3] mb-1">
                <span>Progress</span>
                <span>{props.finishedMaterials}/{props.numberOfMaterials}</span>
            </div>
            
            {/*  (Background) */}
            <div className="w-full bg-[#2A2A3C] rounded-full h-2 overflow-hidden">
                {/*  (Foreground) */}
                <div 
                    className="bg-[#A78BFA] h-2 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>



    </div>
  )
}