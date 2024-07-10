export default function CelebRelComponent({ data, relationship }) {

    if(relationship?.length <= 0) return null;

    console.log({relationship})

    const celebrity = relationship[0]?.related_celebrity;
    const { name, image, roles } = celebrity;
    const { embedded_code } = relationship[0];
    return <>
        <h2 key={data.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{data.first_name} {data.last_name} Relationships
        </h2>   
     
 
</>

    
}