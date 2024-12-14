const Card = (username) => {
  return (
    <div>
       <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
       <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
       <div className="pt-6 text-center space-y-4">
       <blockquote>
       <p className="text-lg font-medium">
        Tailwind CSS is the only framework that I have seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nisi.
       </p>
       </blockquote>
       <figcaption className="font-medium">
       <div className="text-sky-500 dark:text-sky-400">
        {username}
       </div>
       <div className="text-slate-700 dark:text-slate-500">
         {username}
       </div>
       </figcaption>
       </div>
      </figure>    
    </div>
  )
}

export default Card