
const ExperienceCard = ({ data }) => {
  return (
    <div key={data.title} className="grid grid-cols-6 text-gray-300 border rounded-lg p-4">
    <div className="col-span-6 md:col-span-2 md:border-r border-b md:border-b-0 md:pb-0 pb-4 mr-4 pr-4 min-w-fit">
      <div className="text-amber-500">
        {data.title}
      </div>
      <div>
        {data.timestamp}
      </div>
      <div>
        {data.company}
      </div>
      <div>
        {data.location}
      </div>
    </div>
    <div className="col-span-4 px-4 mt-4 md:mt-0">
      {data.bullets && data.bullets.map((bullet, index) => (
        <li key={index}>
          {bullet}
        </li>
      ))}
    </div>
  </div>
  )
};

export default ExperienceCard;


