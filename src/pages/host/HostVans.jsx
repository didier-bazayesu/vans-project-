
import { Await, Link ,useLoaderData} from 'react-router-dom';
import getVans from '../../mirageLibrary/API';
import isLoading from '../../help/HelperFunction';
export function loader ({params}){
        return getVans(params.id);
}

function HostVans() {
    const vans= useLoaderData();
    function HostVansHandleLoading(vans) {

        if(vans) {
            const hostVansEls = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="hover:text-2xl hover:text-red-300 "
            >
                <div className="flex gap-2 space-y-5 " key={van.id}>
                    <img 
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`} 
                    className='w-50 5-20  object-cover rounded-[5px]'
                    />
        
                    <div className="flex flex-col justify-center">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
            ))

            return hostVansEls;
        }
   }

  return (
         <section>
            <h2 className='font-bold text-3xl'>Your listed Vans</h2>
            <div className=" mt-5">
                {
                    vans.length && (
                        <Await resolve={vans} errorElement={<p className="text-red-500 text-center">Failed to load vans. Please try again later.</p>}   >
                            {HostVansHandleLoading}
                        </Await>
                    )
                }
            </div>
         </section>
      
  )
}

export default HostVans