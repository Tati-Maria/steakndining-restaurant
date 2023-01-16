import {staff} from "../data/menu"
import Title from "./Title";

const Staff = () => {
  return (
    <section className="py-12 ">
        <Title title="Our Staff" />
        <div className='max-w-[1640px] mx-auto p-4'>
            {/*Container */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 place-items-center">
                {staff.map(s => (
                    <div key={s.id} className="w-[300px]">
                        <img src={s.image} alt={s.name} className="rounded-t-md shadow-sm object-cover w-full" />
                        <div className="flex justify-between p-4 bg-orange-500 rounded-b-md">
                            <p className="text-lg">{s.name}</p>
                            <p className="font-bold">{s.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Staff;